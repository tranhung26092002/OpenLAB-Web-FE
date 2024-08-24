import imageContact from "@assets/image/contact/contact-image.webp";
const SectionContact = () => {
  return (
    <div className="body-section-contact flex justify-around items-start px-20 py-20  ">
      <div className="content-section-contact flex justify-center items-center gap-6">
        <div>
          <img src={imageContact} alt="image-section-contact" />
        </div>
        <div className="px-10 w-1/2 flex flex-col gap-4 items-start justify-center">
          <span className="text-3xl font-semibold">Liên hệ Open LAB</span>
          <p>
            Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản
            hồi trong thời gian sớm nhất!
          </p>
          <button className="py-2 text-white px-6 bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] cursor-pointer rounded">Liên hệ</button>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
