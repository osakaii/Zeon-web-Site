import React from "react";
import styles from "../../../styles/Company/CompanyGoals.module.scss";
import clickImg from "../../../Assets/Company/Start.svg";

function CompanyGoals(props) {
  return (
    <section className={styles.goals}>
      <div className="container">
        <div className={styles.goalsContent}>
          <div className={styles.title}>
            <h3>Наши цели</h3>
            <p >
              Нашей главной задачей является удовлетворение <br /> потребностей как
              заказчиков, так и разработчиков..
            </p>
          </div>
          <div className={styles.itemsWrapper}>
            <div className={styles.item}>
              <svg
                width="32"
                height="42"
                viewBox="0 0 32 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.77223 4.44012L5.77224 4.44013C5.81966 4.47151 5.90927 4.55009 6.01909 4.65064C6.13346 4.75537 6.28088 4.89445 6.44988 5.05646C6.78803 5.38062 7.2147 5.79859 7.64054 6.22161C8.0664 6.64465 8.49196 7.07325 8.82789 7.4187C9.15913 7.75933 9.41377 8.02969 9.48769 8.12922M5.77223 4.44012L8.12916 9.48774C8.35739 9.65725 8.59162 9.75226 8.82508 9.74937C9.06184 9.74644 9.27548 9.64311 9.45927 9.45933C9.64305 9.27554 9.74639 9.0619 9.74931 8.82513C9.7522 8.59168 9.65719 8.35745 9.48769 8.12922M5.77223 4.44012C5.49111 4.2541 5.06585 4.24786 4.76386 4.41526M5.77223 4.44012L4.44007 5.7723C4.2918 5.54831 4.26203 5.27146 4.32066 5.02453C4.37927 4.77769 4.5301 4.54478 4.76386 4.41526M9.48769 8.12922L9.36726 8.21865L9.48768 8.12921C9.48769 8.12922 9.48769 8.12922 9.48769 8.12922ZM4.76386 4.41526L4.83656 4.54646L4.76384 4.41527C4.76384 4.41526 4.76385 4.41526 4.76386 4.41526ZM6.87429 14.467C7.38973 14.391 7.71707 14.0376 7.78635 13.6387C7.85614 13.2369 7.65952 12.8102 7.18275 12.611L7.18273 12.611C7.1122 12.5816 7.02121 12.5621 6.90194 12.5476C6.7811 12.5328 6.62195 12.5222 6.41015 12.5146C5.98639 12.4994 5.33943 12.496 4.34165 12.4996C3.64756 12.5021 2.99911 12.5087 2.51339 12.5174C2.27062 12.5218 2.06795 12.5267 1.92037 12.5318C1.84669 12.5344 1.78588 12.537 1.74034 12.5398C1.70249 12.5421 1.65777 12.5451 1.63033 12.5521L1.63026 12.5521L1.37492 14.1771L1.29067 14.3012C1.42226 14.3905 1.56803 14.4279 1.93598 14.451C2.30589 14.4742 2.93083 14.4837 4.04522 14.4948C4.72277 14.5016 5.37778 14.502 5.88744 14.4973C6.1422 14.4949 6.36118 14.4912 6.52873 14.4863C6.69197 14.4816 6.81628 14.4755 6.87429 14.467ZM6.87429 14.467L6.85242 14.3186L6.87431 14.467C6.8743 14.467 6.8743 14.467 6.87429 14.467ZM12.5296 13.1372L12.5712 13.0939L12.7968 12.8584C12.8665 12.7857 12.9495 12.7166 13.0282 12.6627L12.5296 13.1372ZM12.5296 13.1372L12.5295 13.1973L12.5063 24.8524C12.4981 29.0101 12.4985 31.9456 12.5086 33.8683C12.5136 34.8295 12.5211 35.5382 12.5312 36.0202C12.5362 36.261 12.5419 36.4463 12.5484 36.5785C12.5516 36.6445 12.5551 36.6985 12.5588 36.7402C12.5622 36.7773 12.5667 36.8171 12.5752 36.8462C12.6335 37.0475 12.7677 37.2234 12.9318 37.3484C13.0958 37.4733 13.3002 37.5556 13.5082 37.5559C13.5927 37.556 13.6744 37.5452 13.7856 37.4961C13.8894 37.4502 14.0181 37.3714 14.2024 37.242C14.5722 36.9826 15.198 36.4963 16.3538 35.592C17.2319 34.9051 17.7174 34.5308 17.9945 34.3425C18.1052 34.2673 18.1732 34.2285 18.2143 34.2101C18.2211 34.2216 18.229 34.2351 18.2381 34.2506C18.2683 34.3023 18.3099 34.3746 18.3617 34.4653C18.4651 34.6466 18.6085 34.9004 18.7814 35.2081C19.1273 35.8235 19.5909 36.654 20.0887 37.551C21.023 39.2345 21.5216 40.1239 21.8459 40.5904C22.0075 40.8229 22.1373 40.9678 22.2693 41.0512C22.4107 41.1403 22.5402 41.1499 22.668 41.1499C22.6984 41.1499 22.7284 41.1416 22.7437 41.1372C22.7642 41.1312 22.788 41.1231 22.8139 41.1137C22.8659 41.0947 22.9335 41.0673 23.0138 41.0332C23.175 40.9649 23.3935 40.8666 23.6533 40.7459C24.1733 40.5046 24.8622 40.172 25.5949 39.8064C27.0384 39.0862 27.8088 38.6958 28.2042 38.4142C28.4032 38.2725 28.5294 38.1435 28.5909 37.9947C28.6532 37.844 28.6382 37.6971 28.6171 37.5556C28.6132 37.5295 28.6035 37.5021 28.5962 37.4825C28.5875 37.4593 28.576 37.4319 28.5625 37.4011C28.5353 37.3394 28.4973 37.2588 28.4501 37.1625C28.3555 36.9695 28.2218 36.7085 28.0591 36.3985C27.7335 35.7782 27.29 34.9588 26.8072 34.0898L25.1758 31.1535L27.7215 31.1332L30.5199 31.1108L30.5786 31.1104L30.6214 31.0702L30.8217 30.8819C31.14 30.5827 31.2259 30.0998 31.0209 29.7192L30.8888 29.7903L31.0209 29.7192C31.0101 29.6991 30.9938 29.679 30.9842 29.6673C30.9768 29.6583 30.9683 29.6483 30.9587 29.6372C30.9517 29.6291 30.9441 29.6205 30.9361 29.6114C30.8976 29.5682 30.8442 29.5103 30.7775 29.4393C30.6438 29.297 30.4536 29.099 30.2155 28.8537C29.7391 28.3629 29.0687 27.6809 28.2693 26.8725C26.6705 25.2557 24.5545 23.1322 22.4395 21.0196C20.3244 18.907 18.2101 16.805 16.6145 15.231C15.8167 14.4441 15.1484 13.7889 14.6744 13.3303C14.4374 13.1011 14.2485 12.9205 14.1161 12.7969C14.05 12.7353 13.997 12.6869 13.9587 12.6535C13.9398 12.6371 13.9227 12.6227 13.9086 12.6119C13.9018 12.6067 13.8931 12.6002 13.8838 12.5944C13.8792 12.5916 13.8716 12.5871 13.8621 12.5827L13.8617 12.5826C13.8559 12.58 13.831 12.5687 13.7977 12.5687C13.7375 12.5687 13.6462 12.5571 13.604 12.5457L13.6038 12.5457C13.5548 12.5325 13.4937 12.5294 13.4406 12.5302C13.3845 12.531 13.3226 12.5366 13.2671 12.5473L12.5296 13.1372ZM25.709 12.6986C25.5757 12.6081 25.4288 12.5714 25.0379 12.5494C24.6441 12.5272 23.9709 12.5195 22.7587 12.5111C21.697 12.5037 21.0179 12.5045 20.5795 12.518C20.3604 12.5248 20.1981 12.5348 20.0766 12.5492C19.9571 12.5634 19.8663 12.5828 19.7967 12.6136L19.7967 12.6136C19.3296 12.8208 19.1419 13.2478 19.2156 13.6465C19.2888 14.0425 19.6154 14.3918 20.1254 14.467C20.1834 14.4755 20.3077 14.4816 20.471 14.4863C20.6385 14.4912 20.8575 14.4949 21.1122 14.4973C21.6219 14.502 22.2769 14.5016 22.9545 14.4948C24.0689 14.4837 24.6938 14.4742 25.0637 14.451C25.4317 14.4279 25.5774 14.3905 25.709 14.3012M25.709 12.6986L25.6255 12.8217L25.709 12.6986C25.709 12.6986 25.709 12.6986 25.709 12.6986ZM25.709 12.6986C25.9824 12.8841 26.1121 13.1975 26.1121 13.4999C26.1121 13.8023 25.9824 14.1157 25.709 14.3012M25.709 14.3012L25.6248 14.1771M25.709 14.3012C25.709 14.3012 25.709 14.3012 25.709 14.3012L25.6248 14.1771M25.6248 14.1771C26.0745 13.8719 26.0745 13.128 25.6248 12.8227C25.432 12.6919 25.1857 12.678 22.7577 12.6611C20.6334 12.6463 20.0526 12.6643 19.8575 12.7508C19.0505 13.1087 19.2496 14.1862 20.1473 14.3186C20.3369 14.3465 21.5995 14.3583 22.953 14.3448C25.1854 14.3225 25.4335 14.3069 25.6248 14.1771ZM22.5759 30.4607C22.5851 30.485 22.6079 30.5307 22.6356 30.5845C22.6653 30.6425 22.7063 30.7203 22.7569 30.8154C22.8582 31.0056 22.9992 31.2665 23.1696 31.579C23.5104 32.2042 23.9693 33.0372 24.4641 33.9273C24.9587 34.8169 25.4132 35.6385 25.7471 36.2456C25.9141 36.5492 26.0508 36.7989 26.1472 36.9766C26.1954 37.0656 26.2334 37.1361 26.26 37.1863C26.2618 37.1897 26.2636 37.193 26.2653 37.1961C26.2181 37.2331 26.1389 37.285 26.0174 37.3556C25.7578 37.5067 25.331 37.7289 24.6812 38.0541C24.2048 38.2924 23.7695 38.5063 23.452 38.6587C23.2932 38.735 23.1645 38.7956 23.0753 38.8361C23.0691 38.8389 23.0631 38.8417 23.0573 38.8443C23.0335 38.802 23.0036 38.7484 22.9678 38.6843C22.8712 38.511 22.7328 38.2619 22.5629 37.9553C22.2231 37.3422 21.7575 36.4997 21.2481 35.5759C20.7383 34.6513 20.249 33.7863 19.8714 33.1372C19.6826 32.8128 19.5213 32.5417 19.3991 32.3438C19.3381 32.245 19.2861 32.1634 19.2451 32.1022C19.2081 32.0472 19.1704 31.9937 19.1402 31.9651L19.1402 31.9651C18.8204 31.6628 18.3039 31.6202 17.9436 31.8698C17.8327 31.9466 17.0905 32.5187 16.2981 33.1377C15.5031 33.7587 14.7211 34.3693 14.56 34.4947L14.6522 34.613L14.56 34.4947L14.5092 34.5343V25.2059V15.9326L21.1285 22.5515L27.7532 29.1758L25.6152 29.2093C24.4705 29.2272 23.8391 29.2399 23.4759 29.2653C23.1187 29.2902 22.9796 29.328 22.8633 29.4334C22.7225 29.5609 22.6227 29.7376 22.5712 29.9168C22.5201 30.0948 22.5119 30.2923 22.5759 30.4607ZM22.5759 30.4607L22.7162 30.4075L22.576 30.4608C22.576 30.4608 22.5759 30.4608 22.5759 30.4607ZM13.0865 0.974146L13.087 0.973911L13.087 0.973901L13.1483 1.11083L13.0865 0.974146ZM13.0865 0.974146C12.976 1.02358 12.8588 1.07599 12.7683 1.17852M13.0865 0.974146L12.7683 1.17852M12.7683 1.17852C12.6755 1.28381 12.6243 1.42445 12.5912 1.62137M12.7683 1.17852L12.5912 1.62137M12.5912 1.62137C12.5263 2.008 12.5183 2.70713 12.5049 4.04527M12.5912 1.62137L12.5049 4.04527M12.5049 4.04527C12.4982 4.72283 12.4977 5.37783 12.5025 5.88749M12.5049 4.04527L12.5025 5.88749M12.5025 5.88749C12.5049 6.14226 12.5086 6.36123 12.5134 6.52879M12.5025 5.88749L12.5134 6.52879M12.5134 6.52879C12.5182 6.69204 12.5242 6.81636 12.5328 6.87437M12.5134 6.52879L12.5328 6.87437M12.5328 6.87437C12.6211 7.47364 13.051 7.79724 13.4998 7.79724M12.5328 6.87437L13.4998 7.79724M13.4998 7.79724C13.9486 7.79724 14.3785 7.47364 14.4669 6.87436M13.4998 7.79724L14.4669 6.87436M14.4669 6.87436C14.4755 6.81635 14.4815 6.69204 14.4863 6.52879M14.4669 6.87436C14.4669 6.87436 14.4669 6.87436 14.4669 6.87437L14.4863 6.52879M14.4863 6.52879C14.4911 6.36123 14.4948 6.14226 14.4972 5.88749M14.4863 6.52879L14.4972 5.88749M14.4972 5.88749C14.502 5.37783 14.5015 4.72283 14.4948 4.04527M14.4972 5.88749L14.4948 4.04527M14.4948 4.04527C14.4812 2.69021 14.4722 1.97583 14.3992 1.58188M14.4948 4.04527L14.3992 1.58188M14.3992 1.58188C14.3619 1.38063 14.3039 1.23642 14.1991 1.13214M14.3992 1.58188L14.1991 1.13214M14.1991 1.13214C14.098 1.03143 13.9684 0.985294 13.8449 0.942244L14.1991 1.13214ZM21.0979 4.5433C20.9984 4.61722 20.728 4.87186 20.3874 5.2031M21.0979 4.5433L21.187 4.66322L21.0979 4.54331C21.0979 4.54331 21.0979 4.5433 21.0979 4.5433ZM21.0979 4.5433C21.5876 4.17957 22.1206 4.24576 22.4373 4.56243C22.754 4.87911 22.8202 5.41215 22.4564 5.90183M20.3874 5.2031L18.6582 9.46584C17.9404 9.94092 17.0588 9.05935 17.5339 8.34154C17.7211 8.05873 20.8298 4.92927 21.1873 4.66373C22.0588 4.01638 22.9834 4.94091 22.336 5.8124L22.4564 5.90183M20.3874 5.2031C20.0419 5.53903 19.6133 5.96459 19.1903 6.39045M20.3874 5.2031L19.1903 6.39045M22.4564 5.90183C22.3825 6.00136 22.1279 6.27172 21.7966 6.61235M22.4564 5.90183L21.7966 6.61235M19.1903 6.39045C18.7673 6.81629 18.3493 7.24296 18.0252 7.58111M19.1903 6.39045L18.0252 7.58111M18.0252 7.58111C17.8631 7.75012 17.7241 7.89753 17.6193 8.0119M18.0252 7.58111L17.6193 8.0119M17.6193 8.0119C17.5188 8.12172 17.4402 8.21133 17.4088 8.25875M17.6193 8.0119L17.4088 8.25875M17.4088 8.25875C16.8436 9.11283 17.8869 10.1562 18.741 9.59092M17.4088 8.25875L18.741 9.59092M18.741 9.59092C18.7884 9.55953 18.878 9.48096 18.9878 9.3804M18.741 9.59092L18.9878 9.3804M18.9878 9.3804C19.1022 9.27567 19.2496 9.1366 19.4186 8.97459M18.9878 9.3804L19.4186 8.97459M19.4186 8.97459C19.7568 8.65043 20.1834 8.23246 20.6093 7.80943M19.4186 8.97459L20.6093 7.80943M20.6093 7.80943C21.0352 7.3864 21.4607 6.9578 21.7966 6.61235M20.6093 7.80943L21.7966 6.61235M4.44007 21.2275L4.54725 21.2984L4.44007 21.2275C4.15761 21.6543 4.28735 22.1309 4.57809 22.4217C4.86883 22.7124 5.34545 22.8421 5.77224 22.5597C5.81966 22.5283 5.90927 22.4497 6.01909 22.3492C6.13346 22.2444 6.28088 22.1054 6.44988 21.9433C6.78803 21.6192 7.2147 21.2012 7.64054 20.7782C8.0664 20.3552 8.49196 19.9266 8.82789 19.5811C9.15913 19.2405 9.41377 18.9701 9.48769 18.8706C9.65719 18.6424 9.7522 18.4081 9.74931 18.1747C9.74639 17.9379 9.64305 17.7243 9.45927 17.5405C9.27548 17.3567 9.06184 17.2534 8.82508 17.2504C8.59162 17.2475 8.35739 17.3426 8.12916 17.5121C8.02963 17.586 7.75927 17.8406 7.41864 18.1719C7.07319 18.5078 6.64459 18.9333 6.22156 19.3592C5.79854 19.7851 5.38057 20.2117 5.05641 20.5499C4.89439 20.7189 4.75532 20.8663 4.65059 20.9807C4.55003 21.0905 4.47146 21.1801 4.44007 21.2275Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.3"
                />
              </svg>

              <span></span>
              <h4>Аутстаффинг</h4>
              <p>
                Трудоустройство разработчиков с опытом работы от 1,5 лет. Стек -
                любой{" "}
              </p>
            </div>
            <div className={styles.item}>
              <svg
                width="40"
                height="38"
                viewBox="0 0 40 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.7251 1.37901L16.4875 2.50354L15.8717 2.18893C15.3464 1.92057 15.161 1.86776 14.6118 1.8301C13.163 1.7308 11.9424 2.42807 11.2904 3.72744C11.0698 4.16713 10.9003 4.96244 10.938 5.38049C10.9615 5.64112 10.9457 5.65994 10.5832 5.80315C9.13557 6.37502 8.22674 7.93369 8.4858 9.40049C8.53377 9.67213 8.59455 9.96705 8.6208 10.0559C8.66026 10.1891 8.60971 10.2439 8.3319 10.3684C8.14666 10.4514 7.79752 10.7167 7.55604 10.9578C6.78338 11.7293 6.43713 12.7681 6.60401 13.8141C6.6508 14.1074 6.71049 14.4003 6.73674 14.4647C6.77018 14.547 6.67916 14.6377 6.4312 14.769C5.8719 15.0653 5.3101 15.6742 5.00682 16.3128C4.43182 17.5235 4.6326 18.9699 5.51065 19.9417L5.79401 20.2554L2.93471 23.1218C0.469008 25.5935 0.0681489 26.0276 0.0231489 26.275C-0.116773 27.044 0.392055 27.6678 1.15916 27.6678C1.33604 27.6678 1.55745 27.629 1.65135 27.5815C1.74518 27.5341 3.13049 26.1906 4.72979 24.596L7.63768 21.6967L8.59698 21.694C9.50924 21.6914 9.58198 21.6792 10.0782 21.444C11.1467 20.9378 11.7806 20.0981 12.0491 18.833C12.0851 18.6631 12.1574 18.6163 12.5039 18.5386C13.8035 18.2471 14.7981 17.2827 15.1123 16.0095L15.2412 15.4871L15.641 15.404C16.9401 15.134 17.9806 14.0925 18.2787 12.7638C18.3564 12.4174 18.4031 12.345 18.5731 12.309C19.8381 12.0405 20.6779 11.4066 21.1841 10.3381C21.4192 9.8419 21.4315 9.76916 21.4341 8.85705L21.4367 7.89791L23.5044 5.82455C24.6416 4.68424 25.6669 3.7008 25.7829 3.63924C26.068 3.48783 26.5141 3.49807 26.7921 3.66221C27.1167 3.85401 27.361 4.38971 27.2928 4.76026C27.2477 5.00502 26.99 5.30229 25.6528 6.65221C24.7803 7.53307 24.0273 8.33057 23.9794 8.4244C23.8566 8.66502 23.8713 9.19737 24.0079 9.46166C24.162 9.75955 24.4747 9.99651 24.7925 10.0561C25.3249 10.156 25.5187 10.0416 26.5954 8.99119C27.6596 7.95307 27.8972 7.81198 28.3779 7.93268C28.6709 8.00619 29.0285 8.34713 29.1276 8.64721C29.3007 9.17174 29.1991 9.33463 27.8381 10.7147C27.1389 11.4237 26.5243 12.0866 26.4724 12.1878C26.4204 12.2891 26.3757 12.5225 26.3728 12.7065C26.363 13.3593 26.8727 13.869 27.5255 13.8592C27.9745 13.8524 28.1165 13.7649 28.8951 13.0163C29.6185 12.3208 29.8753 12.2028 30.3348 12.3544C30.6349 12.4535 30.9758 12.8111 31.0493 13.1041C31.1781 13.6171 31.0496 13.8121 29.6538 15.2224L28.3195 16.5705L28.2848 16.9892C28.2317 17.6285 28.56 18.1088 29.1515 18.2572C29.6114 18.3726 29.8932 18.2342 30.6159 17.5375C31.3755 16.8052 31.7064 16.634 32.1641 16.7367C32.4762 16.8067 32.8455 17.1649 32.9227 17.4724C32.9498 17.5805 32.9482 17.8005 32.919 17.9614C32.8724 18.2186 32.3614 18.7596 28.6721 22.4577C24.2779 26.8624 23.854 27.2372 22.8656 27.5914C22.4174 27.752 22.1778 27.7742 20.4157 27.8182C19.0232 27.8531 18.4065 27.897 18.2673 27.971C18.001 28.1125 10.3167 35.7785 10.1763 36.0428C10.1146 36.1589 10.0642 36.3979 10.0642 36.5741C10.0642 37.3256 10.7001 37.8463 11.4514 37.7101C11.7081 37.6635 12.2029 37.1988 15.4949 33.9124L19.246 30.1678H19.986H20.7261L24.4771 33.9124C27.7692 37.1988 28.264 37.6635 28.5207 37.7101C29.0398 37.8042 29.5633 37.5607 29.7919 37.1187C29.9286 36.8544 29.9438 36.3223 29.8216 36.0806C29.7742 35.9868 28.3656 34.5364 26.6914 32.8575L23.6474 29.8051L24.1449 29.5936C25.1864 29.151 25.5496 28.8365 29.0888 25.3123L32.5275 21.8881L35.2997 24.6659C36.8245 26.1937 38.1669 27.4941 38.2829 27.5557C38.931 27.9001 39.8186 27.481 39.9524 26.7676C40.0659 26.1632 40.0613 26.1575 37.0353 23.1218L34.1781 20.2554L34.4739 19.9281C34.8495 19.5123 35.1339 18.8922 35.2441 18.2492C35.4726 16.9153 34.7307 15.3993 33.5409 14.769C33.2929 14.6377 33.2019 14.547 33.2353 14.4647C33.2616 14.4003 33.3213 14.1074 33.3681 13.8141C33.5343 12.772 33.1845 11.7295 32.4073 10.9506C32.1706 10.7135 31.8254 10.4514 31.6402 10.3684C31.3624 10.2439 31.3118 10.1891 31.3513 10.0559C31.7421 8.73596 31.455 7.50283 30.5433 6.58518C30.1968 6.23651 29.7637 5.93307 29.4581 5.82479C29.447 5.8208 29.4962 5.5594 29.5674 5.24385C29.7421 4.47065 29.6332 3.73166 29.2324 2.96885C28.6052 1.77526 27.4352 1.12557 26.0443 1.19854C25.3061 1.23729 24.5874 1.52619 24.0728 1.99112L23.7648 2.2694L22.8732 1.37533C21.9369 0.43635 21.6539 0.243225 21.2242 0.250178C21.049 0.252991 20.2238 0.625725 18.7251 1.37901ZM21.5697 3.43104L22.0946 3.95994L21.0404 5.0119L19.9862 6.06393L19.0871 5.16737L18.1881 4.2708L19.5363 3.59065C20.2778 3.21658 20.9206 2.90862 20.9647 2.90635C21.0089 2.90408 21.2811 3.14018 21.5697 3.43104ZM14.7764 4.23862C15.0196 4.36166 18.8799 8.21096 19.0146 8.46471C19.2776 8.96002 19.0518 9.64658 18.5472 9.88612C18.2388 10.0324 18.0489 10.0428 17.745 9.92979C17.6241 9.88479 16.6015 8.92674 15.4727 7.80088C13.2592 5.59315 13.1596 5.4576 13.3428 4.90221C13.4274 4.64573 13.7516 4.28682 13.9704 4.20721C14.1753 4.13268 14.5997 4.14916 14.7764 4.23862ZM12.2856 8.02221C12.4247 8.08823 13.2959 8.90557 14.2216 9.83862C15.9993 11.6303 16.076 11.7393 15.9672 12.3193C15.868 12.8481 15.2391 13.2342 14.6936 13.1013C14.5543 13.0674 13.8384 12.4088 12.6672 11.2372C11.0744 9.64393 10.8494 9.38846 10.8001 9.11682C10.73 8.73143 10.9221 8.3383 11.3062 8.08041C11.6156 7.87268 11.931 7.85393 12.2856 8.02221ZM10.3206 12.3854C10.6663 12.5342 12.7715 14.6802 12.8399 14.9535C12.9724 15.4826 12.601 16.1115 12.0896 16.2238C11.538 16.3449 11.347 16.2321 10.2103 15.1132C9.1219 14.0421 8.89229 13.7282 8.89229 13.3121C8.89229 13.0021 9.18588 12.5814 9.51885 12.4141C9.84729 12.249 9.99174 12.2438 10.3206 12.3854ZM8.62752 16.8722C8.88088 17.0112 9.58268 17.7743 9.66916 18.0049C9.78291 18.3082 9.77276 18.4982 9.6262 18.8071C9.38745 19.3103 8.70487 19.5361 8.20479 19.2774C8.08877 19.2174 7.79432 18.9591 7.55041 18.7034C6.92291 18.0455 6.8526 17.5514 7.31299 17.0361C7.63534 16.6754 8.15127 16.6111 8.62752 16.8722Z"
                  fill="#009EE3"
                />
              </svg>
              <span></span>
              <h4>Повышение квалификации </h4>
              <p>
                Повышение уровня junior разработчиков без опыта работы с
                трудоустройством. Стек - JavaScipt (React), Python (Django)
              </p>
            </div>
            <div className={styles.item}>
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.471 0.299049C21.1447 0.471392 20.8773 0.810064 20.7767 1.17811C20.7389 1.31647 19.7205 7.88092 18.5136 15.7657C16.9741 25.8225 16.3277 30.2354 16.348 30.5497C16.4506 32.1407 18.8022 32.3635 19.2231 30.822C19.2609 30.6837 20.2793 24.1192 21.4862 16.2344C23.0257 6.17764 23.6721 1.76475 23.6518 1.45045C23.6187 0.937564 23.3558 0.535533 22.8898 0.285611C22.5285 0.0918611 21.8511 0.0982674 21.471 0.299049ZM10.4001 4.75045C10.255 4.7846 10.0441 4.87991 9.93139 4.96233C9.81866 5.04467 7.59546 7.36624 4.99093 10.1212C1.55928 13.7511 0.220222 15.2182 0.127644 15.4495C-0.0375122 15.8623 -0.0316529 16.1965 0.147722 16.5914C0.241003 16.7968 1.73694 18.4415 4.37546 21.2398C10.4315 27.6625 10.0191 27.2724 10.7534 27.2724C11.8432 27.2724 12.5826 26.068 12.0702 25.1273C11.9843 24.9694 10.0507 22.8676 7.77335 20.4565C5.496 18.0453 3.63272 16.0399 3.63272 16.0001C3.63272 15.9602 5.496 13.9548 7.77335 11.5437C10.0507 9.13256 11.9843 7.03069 12.0702 6.87288C12.653 5.80272 11.6024 4.46749 10.4001 4.75045ZM28.9341 4.74671C28.0003 4.96858 27.4857 6.0578 27.9296 6.87288C28.0155 7.03069 29.9491 9.13256 32.2265 11.5437C34.5038 13.9548 36.3671 15.96 36.3671 15.9996C36.3671 16.0392 34.5038 18.0451 32.2265 20.4569C29.4145 23.4351 28.0283 24.9591 27.9068 25.2063C27.4445 26.1459 28.1749 27.2724 29.2464 27.2724C29.9816 27.2724 29.5841 27.6483 35.6256 21.2391C38.2565 18.448 39.7596 16.7951 39.8524 16.5907C40.0353 16.1881 40.0353 15.812 39.8524 15.4094C39.7596 15.2051 38.2565 13.5521 35.6256 10.761C30.8613 5.70678 30.185 5.0085 29.9218 4.8721C29.6502 4.73147 29.2253 4.67749 28.9341 4.74671Z"
                  fill="#111517"
                />
              </svg>

              <span></span>
              <h4>Emphasis on practice</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel condimentum velit, eget vulputate sapien.Lorem
                ipsum dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyGoals;
