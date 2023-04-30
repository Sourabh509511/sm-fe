import * as React from 'react';

const Loader = (props: any) => (
    <svg
        width={80}
        height={80}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M59 54H41C37.6863 54 35 56.6863 35 60V72C35 75.3137 37.6863 78 41 78H59C62.3137 78 65 75.3137 65 72V60C65 56.6863 62.3137 54 59 54Z"
            fill="#FDC040"
        />
        <path
            d="M6 7.5L7 10L10 9L16 8.5L25.5 8L35.5 8.5L52.5 10L54 8.5L55 6C55.1667 5.33333 55.5 3.9 55.5 3.5C55.5 3.1 54.1667 3 53.5 3L52 3.5L50.5 4H47.5C47 3.5 45.9 2.5 45.5 2.5C45.1 2.5 44.3333 1.83333 44 1.5H41.5L40 3L38 4H36L33.5 2.5L31 1L28.5 1.5L27 3L24.5 4L22 3.5C21.5 3.33333 20.4 3 20 3C19.6 3 19.1667 2 19 1.5H17.5L15.5 2C15.1667 2.33333 14.4 3 14 3C13.5 3 12.5 3.5 12.5 4C12.5 4.5 11 4 10.5 4C10 4 9.5 4 9 3.5C8.6 3.1 7.83333 3 7.5 3H5.5L5 5L6 7.5Z"
            fill="#FDC040"
        />
        <path
            d="M30.1382 51.3666C35.4401 51.3666 40.4373 49.8171 44.2101 47.0033C48.0856 44.1127 50.2199 40.2373 50.2199 36.091C50.2199 31.9447 48.0856 28.0693 44.2101 25.1788C40.4373 22.365 35.4401 20.8154 30.1382 20.8154C24.8364 20.8154 19.8391 22.365 16.0664 25.1788C12.191 28.0693 10.0566 31.9447 10.0566 36.091C10.0566 40.2373 12.1909 44.1127 16.0664 47.0033C19.8391 49.8171 24.8364 51.3666 30.1382 51.3666ZM12.4004 36.091C12.4004 28.9604 20.3576 23.1592 30.1382 23.1592C39.9189 23.1592 47.8761 28.9604 47.8761 36.091C47.8761 43.2216 39.9189 49.0228 30.1382 49.0228C20.3576 49.0228 12.4004 43.2216 12.4004 36.091Z"
            fill="#3BB77E"
        />
        <path
            d="M74.188 68.7062C75.164 67.9488 75.6951 67.0141 75.6951 65.9922C75.6951 64.9705 75.1641 64.0358 74.188 63.2784C75.0423 62.6861 75.6221 62.0009 75.9198 61.2293C76.1793 60.5567 76.3448 59.4732 75.659 58.1308C75.1244 57.085 74.2779 56.4064 73.2105 56.1681C71.5006 55.7866 69.2365 56.5566 66.4679 58.4568C65.1602 54.8953 61.8292 52.3456 57.8374 52.1648C57 52.1268 56.1605 52.0971 55.32 52.0712C56.1275 38.1217 55.8714 23.9894 54.5556 10.0343C54.9887 9.33659 55.8175 7.79187 56.3377 5.48933C56.651 4.10336 56.0611 2.74005 54.8355 2.01613C53.6284 1.30346 52.1732 1.44253 51.1284 2.37067C50.6038 2.83662 50.1082 3.12537 49.2591 3.12537C48.1439 3.12537 47.6459 2.63708 46.8922 1.89801C46.0298 1.05221 44.9566 0 42.8843 0C40.812 0 39.7391 1.05221 38.8769 1.89769C38.1231 2.63677 37.6251 3.12506 36.5103 3.12506C35.3952 3.12506 34.8974 2.63677 34.1437 1.89769C33.2813 1.05221 32.2081 0 30.1359 0C28.0637 0 26.9907 1.05221 26.1287 1.89769C25.3749 2.63677 24.8769 3.12506 23.762 3.12506C22.6472 3.12506 22.1494 2.63677 21.3954 1.89769C20.5334 1.05221 19.4604 0 17.3882 0C15.3161 0 14.2433 1.05221 13.3812 1.89769C12.6274 2.63677 12.1296 3.12506 11.0151 3.12506C10.1663 3.12506 9.67062 2.83631 9.14624 2.37052C8.10184 1.44253 6.64713 1.30331 5.43976 2.01566C4.21395 2.73927 3.62426 4.10242 3.93739 5.48839C4.45771 7.79187 5.28694 9.3369 5.72008 10.0344C5.51742 12.1831 5.33554 14.3743 5.18132 16.5608C5.13569 17.2064 5.62211 17.7668 6.26774 17.8122C6.91635 17.8572 7.47371 17.3713 7.51933 16.7256C7.66293 14.6903 7.82949 12.6492 8.0159 10.6443C22.6997 8.87627 37.5764 8.87627 52.2609 10.6443C53.5364 24.3814 53.7745 38.2873 52.9757 52.0146C49.2713 51.9495 45.5531 51.9976 41.8704 52.1645C37.8786 52.3454 34.5476 54.895 33.2399 58.4565C30.4714 56.5563 28.207 55.7861 26.4972 56.1678C25.4299 56.4061 24.5833 57.0847 24.0488 58.1307C23.363 59.4729 23.5284 60.5563 23.7878 61.229C24.007 61.7973 24.3805 62.3181 24.9025 62.79C19.2949 62.6315 13.6272 62.2129 8.0159 61.5367C6.7776 48.2017 6.51306 34.6976 7.22995 21.3845C7.26479 20.7382 6.769 20.186 6.12274 20.1513C5.47257 20.1157 4.92444 20.6123 4.88944 21.2585C4.15692 34.861 4.44193 48.6594 5.73289 62.279C5.30319 62.9667 4.46271 64.5191 3.93786 66.8435C3.6241 68.2299 4.2138 69.5937 5.44007 70.3178C6.64697 71.0306 8.10231 70.8909 9.14624 69.9632C9.6714 69.4973 10.1674 69.2085 11.0154 69.2085C12.1306 69.2085 12.6287 69.6968 13.3826 70.4361C14.245 71.2816 15.3181 72.3336 17.3904 72.3336C19.4629 72.3336 20.536 71.2814 21.3984 70.4361C22.1522 69.6968 22.6505 69.2085 23.7655 69.2085C24.1435 69.2085 24.451 69.266 24.7196 69.3684C24.2927 69.7936 23.98 70.2561 23.7874 70.7554C23.528 71.4281 23.3625 72.5116 24.0483 73.8539C24.5828 74.8997 25.4294 75.5784 26.4968 75.8166C26.7809 75.8801 27.0801 75.9116 27.3946 75.9116C28.9726 75.9116 30.9309 75.1108 33.2389 73.5269C34.5463 77.089 37.8775 79.6391 41.8699 79.8198C44.5188 79.9398 47.1861 79.9998 49.8538 79.9998C52.5209 79.9998 55.1886 79.9398 57.8371 79.8198C61.8293 79.6389 65.1605 77.0889 66.4679 73.5267C68.7759 75.1108 70.7342 75.9115 72.3122 75.9115C72.6266 75.9115 72.9261 75.8798 73.21 75.8165C74.2774 75.5782 75.124 74.8996 75.6585 73.8536C76.3443 72.5114 76.1788 71.428 75.9193 70.7553C75.6221 69.9836 75.0423 69.2984 74.188 68.7062ZM7.45527 8.35282C7.09479 7.68468 6.57884 6.54466 6.22353 4.97197C6.09462 4.40118 6.50322 4.10961 6.63135 4.03399C6.78619 3.94258 7.18995 3.76773 7.5898 4.12289C8.29528 4.74947 9.32218 5.46886 11.0151 5.46886C13.0871 5.46886 14.16 4.41665 15.0222 3.57116C15.7758 2.83209 16.2738 2.3438 17.3883 2.3438C18.503 2.3438 19.0009 2.83209 19.7548 3.57116C20.6167 4.41665 21.6898 5.46886 23.762 5.46886C25.8343 5.46886 26.9074 4.41665 27.7695 3.57116C28.5232 2.83209 29.0212 2.3438 30.1359 2.3438C31.2508 2.3438 31.7488 2.83209 32.5025 3.57116C33.3649 4.41665 34.438 5.46886 36.5103 5.46886C38.5825 5.46886 39.6554 4.41665 40.5177 3.57116C41.2714 2.83209 41.7694 2.3438 42.8843 2.3438C43.9995 2.3438 44.4974 2.83209 45.2512 3.57116C46.1137 4.41665 47.1869 5.46886 49.2593 5.46886C50.952 5.46886 51.9792 4.74962 52.6849 4.12289C53.0843 3.76789 53.4889 3.94242 53.6439 4.03414C53.7722 4.10992 54.1809 4.40149 54.0517 4.97244C53.6964 6.5456 53.1801 7.68578 52.8206 8.35266C37.7645 6.517 22.5098 6.517 7.45527 8.35282ZM56.4352 77.5298C54.8573 77.5893 53.2745 77.6292 51.6896 77.6457C52.3903 72.505 53.6906 67.3152 55.5644 62.1986C55.7869 61.5907 55.4747 60.9178 54.8669 60.6951C54.2589 60.4726 53.5862 60.7849 53.3634 61.3926C51.3926 66.7746 50.0352 72.2395 49.3229 77.6531C47.7475 77.6482 46.1733 77.622 44.6028 77.5748C46.1911 66.0239 50.4277 57.1438 51.8909 54.3403C53.3654 54.3575 54.8381 54.395 56.3064 54.4493C55.9677 55.1414 55.5686 55.9905 55.1361 56.9786C54.8766 57.5714 55.1466 58.2625 55.7395 58.5221C55.8925 58.5891 56.0518 58.6208 56.2089 58.6208C56.6603 58.6208 57.0905 58.3585 57.283 57.9186C57.9005 56.5084 58.4444 55.3962 58.8324 54.6389C60.2204 54.9114 61.4622 55.57 62.444 56.4995C60.5824 60.6673 57.6693 68.3049 56.4352 77.5298ZM19.7579 68.7621C19.004 69.5012 18.5057 69.9896 17.3907 69.9896C16.2756 69.9896 15.7775 69.5014 15.0237 68.7623C14.1612 67.9168 13.0881 66.8646 11.0157 66.8646C9.32437 66.8646 8.29716 67.5835 7.59027 68.2106C7.19057 68.5656 6.78682 68.391 6.63213 68.2995C6.50369 68.2237 6.09493 67.932 6.22431 67.3602C6.60619 65.6688 7.17479 64.4767 7.53511 63.8361C13.0539 64.5072 18.6283 64.938 24.1502 65.1147C24.0603 65.3983 24.013 65.6914 24.013 65.9924C24.013 66.2964 24.0611 66.5927 24.153 66.879C24.0275 66.8705 23.8994 66.8647 23.7661 66.8647C21.6934 66.8646 20.6203 67.9168 19.7579 68.7621ZM27.0079 73.5291C26.749 73.4713 26.4157 73.3347 26.136 72.7874C25.8196 72.1678 25.8922 71.8123 25.9747 71.5989C26.2174 70.97 27.1024 70.3389 28.4668 69.8218C28.9265 69.6476 29.2287 69.2051 29.2236 68.7135C29.2184 68.222 28.907 67.7859 28.4437 67.6215C27.0098 67.1124 26.3568 66.4201 26.3568 65.9921C26.3568 65.5641 27.0099 64.8717 28.4437 64.3627C28.907 64.1983 29.2184 63.7622 29.2236 63.2706C29.2286 62.779 28.9265 62.3365 28.4668 62.1625C27.1024 61.6454 26.2174 61.0145 25.9747 60.3854C25.8924 60.172 25.8196 59.8165 26.136 59.1971C26.4157 58.6496 26.749 58.513 27.0079 58.4552C27.5599 58.3319 29.1898 58.348 32.6852 60.9396C32.6747 61.0571 32.6644 61.1746 32.6582 61.2934C32.4936 64.4111 32.4936 67.5727 32.6582 70.6904C32.6644 70.8092 32.6747 70.9267 32.6852 71.0442C29.1901 73.636 27.5607 73.6522 27.0079 73.5291ZM34.9985 61.4171C35.1973 57.6483 38.1973 54.6772 41.9765 54.5061C42.0152 54.5043 42.0543 54.5033 42.093 54.5014C40.485 57.8057 37.4825 64.7533 35.7981 73.5358C35.3371 72.641 35.0549 71.6364 34.9985 70.5675C34.8385 67.5316 34.8385 64.453 34.9985 61.4171ZM37.7567 75.911C39.4945 65.2297 43.4088 57.0166 44.7628 54.405C46.2622 54.3612 47.7652 54.3365 49.2689 54.3315C47.4192 58.0914 43.6995 66.6841 42.2494 77.4893C42.1585 77.4854 42.0674 77.4826 41.9765 77.4785C40.3796 77.4062 38.9228 76.8324 37.7567 75.911ZM64.7091 70.5673C64.5301 73.9633 62.076 76.7107 58.8274 77.3464C59.9388 69.4814 62.2881 62.8464 64.0378 58.7118C64.4224 59.539 64.6582 60.4515 64.7091 61.417C64.8691 64.453 64.8691 67.5315 64.7091 70.5673ZM73.5719 72.7872C73.2922 73.3347 72.9589 73.4713 72.7 73.5291C72.1477 73.6521 70.518 73.6361 67.0227 71.0447C67.0332 70.9272 67.0435 70.8095 67.0498 70.6908C67.2143 67.573 67.2143 64.4114 67.0498 61.2937C67.0435 61.1749 67.0332 61.0574 67.0227 60.9399C70.5176 58.3485 72.1472 58.3321 72.7 58.4555C72.9589 58.5133 73.2922 58.6499 73.5719 59.1971C73.8883 59.8166 73.8155 60.1721 73.733 60.3856C73.4904 61.0145 72.6053 61.6456 71.2409 62.1625C70.7813 62.3367 70.4792 62.7792 70.4842 63.2708C70.4894 63.7623 70.8008 64.1984 71.2641 64.3628C72.6981 64.8719 73.3511 65.5643 73.3511 65.9922C73.3511 66.4202 72.698 67.1126 71.2641 67.6216C70.8008 67.786 70.4894 68.2221 70.4842 68.7137C70.479 69.2053 70.7812 69.6478 71.2409 69.822C72.6053 70.3389 73.4904 70.97 73.7332 71.5991C73.8154 71.8123 73.8883 72.1678 73.5719 72.7872Z"
            fill="#3BB77E"
        />
        <path
            d="M22.2971 32.2231C27.5003 31.532 32.776 31.532 37.9789 32.2231C38.0313 32.23 38.0833 32.2334 38.1347 32.2334C38.7133 32.2334 39.2166 31.805 39.2949 31.2158C39.3802 30.5742 38.9291 29.985 38.2875 29.8998C32.8804 29.1817 27.3964 29.1817 21.9885 29.8998C21.3469 29.985 20.8958 30.5742 20.9811 31.2158C21.0664 31.8573 21.6555 32.3081 22.2971 32.2231Z"
            fill="#3BB77E"
        />
        <path
            d="M39.2949 41.2714C39.2098 40.6299 38.6201 40.1792 37.9789 40.2641C32.776 40.9552 27.5003 40.9552 22.2971 40.2641C21.6558 40.1789 21.0663 40.6299 20.9811 41.2714C20.8958 41.913 21.3469 42.5022 21.9885 42.5874C24.6923 42.9465 27.415 43.126 30.1379 43.126C32.8609 43.126 35.5837 42.9465 38.2874 42.5874C38.9293 42.5022 39.3802 41.913 39.2949 41.2714Z"
            fill="#3BB77E"
        />
        <path
            d="M42.4695 36.2436C42.4695 35.5964 41.9449 35.0717 41.2976 35.0717H18.9785C18.3312 35.0717 17.8066 35.5964 17.8066 36.2436C17.8066 36.8908 18.3312 37.4155 18.9785 37.4155H41.2976C41.9448 37.4155 42.4695 36.8908 42.4695 36.2436Z"
            fill="#3BB77E"
        />
    </svg>
);
export default Loader;
