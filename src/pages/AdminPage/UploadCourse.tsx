import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Table, Upload, UploadFile, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { DeleteOutlined, EditOutlined, FolderAddOutlined, UploadOutlined } from '@ant-design/icons';
import { createCourse, deleteCourse, fetchAllCourse, updateCourse } from '../../redux/ProductReducer/ProductReducer';
import { DOMAIN_VIDEO } from '../../../src/util/config';

interface UploadCourseProps {
    onAddLesson: (id: number, titleCourse: string) => void;
}

const UploadCourse: React.FC<UploadCourseProps> = ({ onAddLesson }) => {
    const dispatch = useDispatch<DispatchType>();
    const courseData = useSelector((state: RootState) => Array.isArray(state.ProductReducer.items) ? state.ProductReducer.items : []);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [editingId, setEditingId] = useState<number | null>(null);

    const courseStatus = useSelector((state: RootState) => state.ProductReducer.status);
    const courseError = useSelector((state: RootState) => state.ProductReducer.error);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    useEffect(() => {
        if (courseStatus === 'succeeded') {
            notification.success({
                message: 'Success',
                description: 'Operation completed successfully!'
            });
        } else if (courseStatus === 'failed' && courseError) {
            notification.error({
                message: 'Error',
                description: courseError
            });
        }
    }, [courseStatus, courseError]);

    useEffect(() => {
        dispatch(fetchAllCourse());
    }, [dispatch]);

    const handleAddOrEdit = (values: any) => {
        const thumbnailFile = values.thumbnail && values.thumbnail[0] && values.thumbnail[0].originFileObj;

        const data: any = {};

        if (editingId) {
            // Cập nhật chỉ gửi những trường có giá trị
            if (values.subId) data.subId = values.subId;
            if (values.title) data.title = values.title;
            if (thumbnailFile) data.thumbnail = thumbnailFile;
            if (values.createdBy) data.createdBy = values.createdBy;
            if (values.typeProduct) data.typeProduct = values.typeProduct;
            if (typeof values.isPublish !== "undefined") data.isPublish = values.isPublish;
            if (values.description) data.description = values.description;
            if (values.originalPrice) data.originalPrice = values.originalPrice;
            
            dispatch(updateCourse({ id: String(editingId), data: data }))
                .then(() => {
                    notification.success({
                        message: 'Success',
                        description: 'Updated Successfully'
                    });
                }).catch(() => {
                    notification.error({
                        message: 'Error',
                        description: 'Failed to Update Course'
                    });
                });
        } else {
            // Thêm mới bắt buộc phải gửi đầy đủ các trường
            if (thumbnailFile) {
                data.subId = values.subId;
                data.title = values.title;
                data.thumbnail = thumbnailFile;
                data.createdBy = values.createdBy;
                data.typeProduct = values.typeProduct;
                data.isPublish = values.isPublish;
                data.description = values.description;
                data.originalPrice = values.originalPrice;
                
                dispatch(createCourse(data))
                    .then(() => {
                        notification.success({
                            message: 'Success',
                            description: 'Created Successfully'
                        });
                    }).catch(() => {
                        notification.error({
                            message: 'Error',
                            description: 'Failed to Create Course'
                        });
                    });
            } else {
                notification.error({
                    message: 'Error',
                    description: 'Please upload the thumbnail image'
                });
                return;
            }
        }
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleDelete = (id: string) => {
        dispatch(deleteCourse(id))
            .then(() => {
                notification.success({
                    message: 'Deleted',
                    description: 'Deleted successfully!',
                });
            })
            .catch(() => {
                notification.error({
                    message: 'Error',
                    description: 'Failed to delete!',
                });
            });
    };

    const showDeleteConfirm = (id: string) => {
        Modal.confirm({
            title: 'Bạn có chắc chắn muốn xóa bài học này không?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                handleDelete(id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleAddLesson = (courseId: number, titleCourse: string) => {
        onAddLesson(courseId, titleCourse);
    };

    const paginatedData = courseData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <Button type="primary" onClick={() => {
                setEditingId(null);
                setIsModalVisible(true);
                form.resetFields();
            }}>Add New</Button>
            <Table
                dataSource={paginatedData.map(item => ({ ...item, key: item.id }))}
                columns={[
                    { title: 'ID', dataIndex: 'id', key: 'id' },
                    {
                        title: 'Thumbnail', dataIndex: 'thumbnail', key: 'thumbnail',
                        render: (thumbnailUrl: string) => (
                            <img src={`${DOMAIN_VIDEO}/images/download/${thumbnailUrl}`} alt="Thumbnail" style={{ width: '80px', height: '80px' }} />
                        )
                    },
                    { title: 'Title', dataIndex: 'title', key: 'title' },
                    {
                        title: 'Actions',
                        key: 'actions',
                        render: (_, record) => (
                            <>
                                <Button
                                    type="primary"
                                    icon={<EditOutlined />}
                                    style={{ marginRight: '10px' }}
                                    onClick={() => {
                                        setEditingId(record.id);
                                        form.setFieldsValue({
                                            id: record.id,
                                            title: record.title,
                                            createdBy: record.createdBy,
                                            typeProduct: record.typeProduct,
                                            isPublish: record.isPublish,
                                            description: record.description,
                                            originalPrice: record.originalPrice,
                                            thumbnail: [{
                                                uid: record.id,
                                                name: 'thumbnail.png',
                                                status: 'done',
                                                url: record.thumbnail
                                            }]
                                        });
                                        setIsModalVisible(true);
                                    }}>Update</Button>
                                <Button
                                    type="default"
                                    icon={<FolderAddOutlined/>}
                                    style={{ marginRight: '10px' }}
                                    onClick={() => handleAddLesson(record.id, record.title)}
                                >
                                    Add Lesson
                                </Button>
                                <Button
                                    danger
                                    key="delete"
                                    icon={<DeleteOutlined />}
                                    onClick={() => showDeleteConfirm(String(record.id))}
                                >
                                    Xóa
                                </Button>
                            </>
                        ),
                    },
                ]}
                pagination={{
                    current: currentPage,
                    pageSize: itemsPerPage,
                    total: courseData.length,
                    onChange: handlePageChange
                }}
            />
            <Modal
                title={editingId ? "Edit" : "Add New"}
                open={isModalVisible}
                onOk={() => form.submit()}
                onCancel={() => {
                    setIsModalVisible(false);
                    form.resetFields();
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleAddOrEdit}
                >
                    <Form.Item
                        label="Sub ID"
                        name="subId"
                        rules={editingId ? [] : [{ required: true, message: 'Please input the sub ID!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={editingId ? [] : [{ required: true, message: 'Please input the title!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Thumbnail"
                        name="thumbnail"
                        rules={editingId ? [] : [{ required: true, message: 'Please upload a thumbnail image!' }]}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload
                            name="thumbnail"
                            listType="picture"
                            maxCount={1}
                            beforeUpload={(file: UploadFile) => {
                                return false; // Prevent automatic upload
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="Created By"
                        name="createdBy"
                        rules={editingId ? [] : [{ required: true, message: 'Please input the creator!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Type Product"
                        name="typeProduct"
                        rules={editingId ? [] : [{ required: true, message: 'Please input the type of product!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Is Publish"
                        name="isPublish"
                        valuePropName="checked"
                    >
                        <Input type="checkbox" />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={editingId ? [] : [{ required: true, message: 'Please input the description!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Original Price"
                        name="originalPrice"
                        rules={editingId ? [] : [{ required: true, message: 'Please input the original price!' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

function normFile(e: any) {
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
}

export default UploadCourse;
