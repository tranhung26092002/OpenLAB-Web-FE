import MainLayout from "~/components/main-layout"



export default function Home() {
  return (
    <div className="w-screen min-h-screen max-w-full ">
      <MainLayout authPage={false}>
        
      <p>OpenLab with Nextjs</p>
     </MainLayout>
   </div>
  );
}
