import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react"; // arrow icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faFilePdf,
  faImage,
  faPlay,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function All() {
  const [auth, setAuth] = useState(true);
  const [videos, setVideos] = useState<any[]>([]);
  const [files, setFiles] = useState<any[]>([]);
  const [downloads, setDownloads] = useState<any[]>([]);
  const [fileHidden1, setfileHidden1] = useState(true);
  const [fileHidden2, setfileHidden2] = useState(true);
  const [fileHidden3, setfileHidden3] = useState(true);
  const [fileHidden4, setfileHidden4] = useState(true);
  const [fileHidden5, setfileHidden5] = useState(true);
  const [fileHidden6, setfileHidden6] = useState(true);
  const [fileHidden7, setfileHidden7] = useState(true);
  const [fileHidden8, setfileHidden8] = useState(true);
  const [fileHidden9, setfileHidden9] = useState(true);
  const [fileHidden10, setfileHidden10] = useState(true);
  const [fileHidden11, setfileHidden11] = useState(true);
  const [fileHidden12, setfileHidden12] = useState(true);
  const [fileHidden13, setfileHidden13] = useState(true);
  const [fileHidden14, setfileHidden14] = useState(true);
  const [fileHidden15, setfileHidden15] = useState(true);
  const [fileHidden16, setfileHidden16] = useState(true);
  const [fileHidden17, setfileHidden17] = useState(true);
  const [fileHidden18, setfileHidden18] = useState(true);
  const [fileHidden19, setfileHidden19] = useState(true);
  const [fileHidden20, setfileHidden20] = useState(true);
  const [fileHidden21, setfileHidden21] = useState(true);
  const [fileHidden22, setfileHidden22] = useState(true);
  useEffect(() => {
    async function getData() {
      const password = sessionStorage.getItem("code");
      if (!password) {
        setAuth(false);
      } else {
        const response = await fetch("http://localhost:3000/all", {
          headers: { "x-password": password },
        });
        const data = await response.json();
        if (response.status === 200) {
          setVideos(data.videos);
          setFiles(data.files);
          setDownloads(data.downloads);
        } else {
          setAuth(false);
        }
      }
    }
    getData();
  }, []);
  if (!auth) {
    return (
      <>
        <h1 className="text-center text-4xl text-red-600 font-bold">
          أنت لم تكتب كلمة المرور
        </h1>
      </>
    );
  }
  return (
    <>
      <h1 className="mt-[30px]! text-center text-red-500 font-bold text-7xl">
        All Content
      </h1>
      <div className="container mt-[100px]!">
        {/* <div className="paper"></div> */}
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">الدرس الأول: الاقتران الزوجي</div>
            <ChevronLeft
              style={{
                rotate: fileHidden1 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setfileHidden1(fileHidden1 ? false : true)}
              size={32}
            />
          </div>
          <div
            className="mt-[30px]! paper min-w-full flex"
            style={{ display: fileHidden1 ? "none" : "block" }}
          >
            <a
              style={{ display: fileHidden1 ? "none" : "block" }}
              className="mt-10! rounded-xl text-green-500 text-center"
              href={videos[0]?.src}
              target="_blank"
            >
              مشاهدة الفيديو<FontAwesomeIcon className="pl-[10px]!" icon={faPlay}></FontAwesomeIcon>
            </a>
            <div className="mt-[30px]! flex justify-evenly flex-row-reverse">
              {/* <span></span> */}
              <p className="font-bold text-2xl text-red-600">الاقتران الزوجي</p>
              <a
                className="text-3xl hover:rotate-[360deg] duration-500"
                href={downloads[0]?.src}
                download
              >
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
              </a>
            </div>
          </div>

          <div
            className="mt-[30px]!  paper min-w-full"
            style={{ display: fileHidden1 ? "none" : "block" }}
          >
            <div className="flex justify-evenly flex-row-reverse">
              <a
                style={{ display: fileHidden1 ? "none" : "block" }}
                className="mt-10! text-center"
                href={files[0]?.src}
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-red-700 pr-10!"
                  icon={faFilePdf}
                ></FontAwesomeIcon>
                (غير محلول) الاقتران الزوجي
              </a>
            </div>
            <div className="flex justify-evenly flex-row-reverse">
              <a
                style={{ display: fileHidden1 ? "none" : "block" }}
                className="mt-10! text-center"
                href={files[1]?.src}
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-red-700 pr-10!"
                  icon={faFilePdf}
                ></FontAwesomeIcon>
                (محلول) الاقتران الزوجي
              </a>
            </div>
            <div className="flex justify-evenly flex-row-reverse">
              <a
                style={{ display: fileHidden1 ? "none" : "block" }}
                className="mt-10! text-center"
                href={files[2]?.src}
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-amber-500 pr-10!"
                  icon={faImage}
                ></FontAwesomeIcon>
                ورقة عمل تدريبية على الاقتران الزوجي
              </a>
            </div>
            <div className="flex justify-evenly flex-row-reverse">
              <a
                style={{ display: fileHidden1 ? "none" : "block" }}
                className="mt-10! text-center"
                href={files[3]?.src}
                target="_blank"
              >
                <FontAwesomeIcon
                  className="text-amber-500 pr-10!"
                  icon={faImage}
                ></FontAwesomeIcon>
                مفهوم الاقتران الزوجي
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
