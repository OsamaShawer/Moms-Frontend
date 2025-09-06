import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react"; // arrow icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPlay } from "@fortawesome/free-solid-svg-icons";

function Videos() {
  const [auth, setAuth] = useState(true);
  const [videos, setVideos] = useState<any[]>([]);
  const [downloads, setDownloads] = useState<any[]>([]);
  const [videoHidden1, setVideoHidden1] = useState(true);
  const [videoHidden2, setVideoHidden2] = useState(true);
  const [videoHidden3, setVideoHidden3] = useState(true);
  const [videoHidden4, setVideoHidden4] = useState(true);
  const [videoHidden5, setVideoHidden5] = useState(true);
  const [videoHidden6, setVideoHidden6] = useState(true);
  const [videoHidden7, setVideoHidden7] = useState(true);
  const [videoHidden8, setVideoHidden8] = useState(true);
  const [videoHidden9, setVideoHidden9] = useState(true);
  const [videoHidden10, setVideoHidden10] = useState(true);
  const [videoHidden11, setVideoHidden11] = useState(true);
  const [videoHidden12, setVideoHidden12] = useState(true);
  const [videoHidden13, setVideoHidden13] = useState(true);
  const [videoHidden14, setVideoHidden14] = useState(true);
  const [videoHidden15, setVideoHidden15] = useState(true);
  const [videoHidden16, setVideoHidden16] = useState(true);
  const [videoHidden17, setVideoHidden17] = useState(true);
  const [videoHidden18, setVideoHidden18] = useState(true);
  const [videoHidden19, setVideoHidden19] = useState(true);
  const [videoHidden20, setVideoHidden20] = useState(true);
  const [videoHidden21, setVideoHidden21] = useState(true);
  const [videoHidden22, setVideoHidden22] = useState(true);
  useEffect(() => {
    async function getData() {
      const password = sessionStorage.getItem("code");
      if (!password) {
        setAuth(false);
      } else {
        const response = await fetch("http://localhost:3000/videos", {
          headers: { "x-password": password },
        });
        const data = await response.json();
        if (response.status === 200) {
          setVideos(data.videos);
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
        Videos
      </h1>
      <div className="container mt-[100px]!">
        {/* <div className="paper"></div> */}
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">الدرس الأول: الاقتران الزوجي</div>
            <ChevronLeft
              style={{
                rotate: videoHidden1 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden1(videoHidden1 ? false : true)}
              size={32}
            />
          </div>
          <div
            className="mt-[30px]! paper w-full min-w-full"
            style={{ display: videoHidden1 ? "none" : "block" }}
          >
            <a
              style={{ display: videoHidden1 ? "none" : "block" }}
              className="mt-[20px]! rounded-xl text-green-500 text-center"
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
                target="_blank"
              >
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الثاني: تمثيل الاقترانات باستخدام الاسحاب
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden2 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden2(videoHidden2 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden2 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الثالث: تمثيل الاقترانات باستخدام الانسحاب
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden3 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden3(videoHidden3 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden3 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">الدرس الرابع: إشارة الاقتاران</div>
            <ChevronLeft
              style={{
                rotate: videoHidden4 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden4(videoHidden4 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden4 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">الدرس الخامس: حل المتباينات</div>
            <ChevronLeft
              style={{
                rotate: videoHidden5 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden5(videoHidden5 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden5 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">الدرس ال</div>
            <ChevronLeft
              style={{
                rotate: videoHidden6 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden6(videoHidden6 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden6 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        {/*
         */}
      {/* <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden7 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden7(videoHidden7 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden7 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden8 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden8(videoHidden8 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden8 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden9 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden9(videoHidden9 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden9 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden10 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden10(videoHidden10 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden10 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden11 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden11(videoHidden11 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden11 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden12 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden12(videoHidden12 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden12 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden13 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden13(videoHidden13 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden13 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden14 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden14(videoHidden14 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden14 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden15 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden15(videoHidden15 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden15 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden16 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden16(videoHidden16 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden16 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden17 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden17(videoHidden17 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden17 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden18 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden18(videoHidden18 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden18 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden19 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden19(videoHidden19 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden19 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden20 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden20(videoHidden20 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden20 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden21 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden21(videoHidden21 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden21 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
        <div className="paper stage1 font-bold text-2xl m-auto! mb-[60px]! min-w-full pt-[40px]! pb-[40px]!">
          <div className="text flex justify-between flex-row-reverse">
            <div className="lesson-title">
              الدرس الأول: الاقتران الزوجي والاقتران الفردي
            </div>
            <ChevronLeft
              style={{
                rotate: videoHidden22 ? "-1deg" : "-90deg",
                cursor: "pointer",
              }}
              onClick={() => setVideoHidden22(videoHidden22 ? false : true)}
              size={32}
            />
          </div>
          <video
            style={{ display: videoHidden22 ? "none" : "block" }}
            className="mt-10! rounded-xl"
            controls
            src={videos[0]?.src}
          ></video>
        </div>
      </div> */}
    </>
  );
}

export default Videos;
