import person from "../assets/img/1.jpg";
export default function Banner() {
  return (
    <section className="banner pt-3 ">
      <div className="container mx-auto">
        <div className="banner__block w-11/12 sm:w-6/12 pb-8 flex items-center gap-5 sm:gap-16 flex-col content-center justify-items-center mx-auto text-center lg:flex-row lg:text-left lg:mx-0">
          <img src={person} alt="person" className="w-48 h-48 rounded-full" />

          <div className="info">
            <h1 className="title-big mb-5 text-4xl font-bold">{"}{ammod"}</h1>
            <p className="mb-2">Brings ideas to life with code! ✨</p>
            {/* <p className="mb-2">Coding dreams into reality! ✨</p> */}
            <p className="mb-3">
              Web Engineer. Visionary Developer. Harmony Seeker.
            </p>
            <div className="sotical gap-3 flex flex-col sm:flex-row items-center ">
              <div className="git flex items-center">
                <a
                  href="https://github.com/Hammod-M"
                  className="flex gap-2 hover:text-blue-700 font-semibold"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 fill-slate-900"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    ></path>
                  </svg>
                  Git
                </a>
              </div>
              <div className="leetcode flex items-center">
                <a
                  href="https://leetcode.com/Hammod_M/"
                  className="flex gap-2 hover:text-blue-700 font-semibold"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 95 111"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-slate-900"
                  >
                    <path
                      d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
                      fill="#FFA116"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                      fill="#B3B3B3"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                      fill="black"
                    ></path>
                  </svg>
                  LeetCode
                </a>
              </div>

              {/* <div className="reviews flex items-center">
                <a href="https://leetcode.com/Hammod_M/" className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                  
                </a>
              </div> */}

              <div className="resume flex items-center">
                <a
                  href="https://www.linkedin.com/in/hammod-muborakshoi/"
                  className="flex gap-2 hover:text-blue-700 font-semibold"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#0a66c2"
                    className="w-6 h-6 linkedin"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                  Linkedin
                </a>
              </div>

              <div className="resume flex items-center">
                <a
                  href="assets/files/cv/cv-eng.pdf"
                  className="flex gap-2 hover:text-blue-700 font-semibold"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  Resume
                </a>
              </div>

              <div className="resume flex items-center">
                <a
                  href="https://t.me/HaMMMMoD"
                  className="flex gap-2 hover:text-blue-700 font-semibold"
                  target="_blank"
                >
                  {/* <svg
                    className="h-6 w-6 text-blue-600"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-6 h-6"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="m0 16c0 8.8366 7.16344 16 16 16 8.8366 0 16-7.1634 16-16 0-8.83656-7.1634-16-16-16-8.83656 0-16 7.16344-16 16z"
                      fill="#08c"
                    />
                    <path
                      d="m8.09992 15.7083c4.29498-1.8712 7.15898-3.1049 8.59198-3.7009 4.0915-1.7018 4.9416-1.9974 5.4958-2.0073.1218-.00205.3943.0282.5709.1714.149.1209.19.2843.2097.399.0196.1146.044.3759.0246.58-.2217 2.3296-1.1811 7.983-1.6692 10.5922-.2065 1.1041-.6132 1.4743-1.0069 1.5105-.8555.0787-1.5052-.5654-2.3339-1.1086-1.2967-.85-2.0292-1.3792-3.2879-2.2086-1.4546-.9586-.5116-1.4854.3174-2.3464.2169-.2253 3.9866-3.6541 4.0595-3.9652.0092-.0389.0176-.1839-.0685-.2605-.0862-.0765-.2133-.0503-.3051-.0295-.13.0295-2.2015 1.3987-6.2144 4.1075-.588.4038-1.1206.6005-1.5977.5902-.5261-.0114-1.53798-.2975-2.29022-.542-.92265-.2999-1.65596-.4585-1.5921-.9678.03326-.2653.3986-.5367 1.09604-.814z"
                      fill="#fff"
                    />
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
