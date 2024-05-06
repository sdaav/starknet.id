import React, { FunctionComponent } from "react";
import { IconProps } from "../../types/frontTypes";

const focusTreeIcon: FunctionComponent<IconProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 652 129"
      className="w-40 m-5"
    >
      <rect width="139" height="129" fill="url(#pattern0)" />
      <path
        d="M178.328 31.9062V103H163.68V31.9062H178.328ZM206.648 62.2773V73.7031H174.324V62.2773H206.648ZM210.066 31.9062V43.3809H174.324V31.9062H210.066ZM214.363 77.1211V76.0957C214.363 72.222 214.917 68.6576 216.023 65.4023C217.13 62.1146 218.742 59.2663 220.857 56.8574C222.973 54.4486 225.577 52.5768 228.67 51.2422C231.762 49.875 235.311 49.1914 239.314 49.1914C243.318 49.1914 246.883 49.875 250.008 51.2422C253.133 52.5768 255.753 54.4486 257.869 56.8574C260.018 59.2663 261.645 62.1146 262.752 65.4023C263.859 68.6576 264.412 72.222 264.412 76.0957V77.1211C264.412 80.9622 263.859 84.5267 262.752 87.8145C261.645 91.0697 260.018 93.918 257.869 96.3594C255.753 98.7682 253.149 100.64 250.057 101.975C246.964 103.309 243.416 103.977 239.412 103.977C235.408 103.977 231.844 103.309 228.719 101.975C225.626 100.64 223.006 98.7682 220.857 96.3594C218.742 93.918 217.13 91.0697 216.023 87.8145C214.917 84.5267 214.363 80.9622 214.363 77.1211ZM228.426 76.0957V77.1211C228.426 79.3346 228.621 81.4017 229.012 83.3223C229.402 85.2428 230.021 86.9355 230.867 88.4004C231.746 89.8327 232.885 90.9557 234.285 91.7695C235.685 92.5833 237.394 92.9902 239.412 92.9902C241.365 92.9902 243.042 92.5833 244.441 91.7695C245.841 90.9557 246.964 89.8327 247.811 88.4004C248.657 86.9355 249.275 85.2428 249.666 83.3223C250.089 81.4017 250.301 79.3346 250.301 77.1211V76.0957C250.301 73.9473 250.089 71.929 249.666 70.041C249.275 68.1204 248.641 66.4277 247.762 64.9629C246.915 63.4655 245.792 62.2936 244.393 61.4473C242.993 60.6009 241.3 60.1777 239.314 60.1777C237.329 60.1777 235.636 60.6009 234.236 61.4473C232.869 62.2936 231.746 63.4655 230.867 64.9629C230.021 66.4277 229.402 68.1204 229.012 70.041C228.621 71.929 228.426 73.9473 228.426 76.0957ZM294.881 92.9902C296.606 92.9902 298.136 92.6647 299.471 92.0137C300.805 91.3301 301.847 90.3861 302.596 89.1816C303.377 87.9447 303.784 86.4961 303.816 84.8359H317.049C317.016 88.5469 316.023 91.8509 314.07 94.748C312.117 97.6126 309.497 99.875 306.209 101.535C302.921 103.163 299.243 103.977 295.174 103.977C291.072 103.977 287.492 103.293 284.432 101.926C281.404 100.559 278.882 98.6706 276.863 96.2617C274.845 93.8203 273.331 90.9883 272.322 87.7656C271.313 84.5104 270.809 81.0273 270.809 77.3164V75.9004C270.809 72.1569 271.313 68.6738 272.322 65.4512C273.331 62.196 274.845 59.3639 276.863 56.9551C278.882 54.5137 281.404 52.6094 284.432 51.2422C287.459 49.875 291.007 49.1914 295.076 49.1914C299.406 49.1914 303.198 50.0215 306.453 51.6816C309.741 53.3418 312.312 55.7181 314.168 58.8105C316.056 61.8704 317.016 65.5 317.049 69.6992H303.816C303.784 67.9414 303.41 66.3464 302.693 64.9141C302.01 63.4818 301.001 62.3424 299.666 61.4961C298.364 60.6172 296.753 60.1777 294.832 60.1777C292.781 60.1777 291.105 60.6172 289.803 61.4961C288.501 62.3424 287.492 63.5143 286.775 65.0117C286.059 66.4766 285.555 68.153 285.262 70.041C285.001 71.8965 284.871 73.8496 284.871 75.9004V77.3164C284.871 79.3672 285.001 81.3366 285.262 83.2246C285.522 85.1126 286.01 86.7891 286.727 88.2539C287.475 89.7188 288.501 90.8743 289.803 91.7207C291.105 92.5671 292.798 92.9902 294.881 92.9902ZM356.453 90.3535V50.168H370.516V103H357.283L356.453 90.3535ZM358.016 79.5137L362.166 79.416C362.166 82.9316 361.759 86.2031 360.945 89.2305C360.132 92.2253 358.911 94.8294 357.283 97.043C355.656 99.224 353.605 100.933 351.131 102.17C348.657 103.374 345.743 103.977 342.391 103.977C339.819 103.977 337.443 103.618 335.262 102.902C333.113 102.154 331.258 100.998 329.695 99.4355C328.165 97.8405 326.961 95.806 326.082 93.332C325.236 90.8255 324.812 87.8145 324.812 84.2988V50.168H338.875V84.3965C338.875 85.959 339.054 87.2773 339.412 88.3516C339.803 89.4258 340.34 90.3047 341.023 90.9883C341.707 91.6719 342.505 92.1602 343.416 92.4531C344.36 92.7461 345.402 92.8926 346.541 92.8926C349.438 92.8926 351.717 92.3066 353.377 91.1348C355.07 89.9629 356.258 88.3678 356.941 86.3496C357.658 84.2988 358.016 82.0202 358.016 79.5137ZM409.822 88.4004C409.822 87.3913 409.529 86.4798 408.943 85.666C408.357 84.8522 407.267 84.1035 405.672 83.4199C404.109 82.7038 401.847 82.0527 398.885 81.4668C396.215 80.8809 393.725 80.1484 391.414 79.2695C389.135 78.3581 387.15 77.2676 385.457 75.998C383.797 74.7285 382.495 73.2311 381.551 71.5059C380.607 69.748 380.135 67.7461 380.135 65.5C380.135 63.2865 380.607 61.2031 381.551 59.25C382.527 57.2969 383.911 55.5716 385.701 54.0742C387.524 52.5443 389.738 51.3561 392.342 50.5098C394.979 49.6309 397.941 49.1914 401.229 49.1914C405.818 49.1914 409.757 49.9238 413.045 51.3887C416.365 52.8535 418.904 54.8717 420.662 57.4434C422.452 59.9824 423.348 62.8796 423.348 66.1348H409.285C409.285 64.7676 408.992 63.5469 408.406 62.4727C407.853 61.3659 406.974 60.5033 405.77 59.8848C404.598 59.2337 403.068 58.9082 401.18 58.9082C399.617 58.9082 398.266 59.1849 397.127 59.7383C395.988 60.2591 395.109 60.9753 394.49 61.8867C393.904 62.7656 393.611 63.7422 393.611 64.8164C393.611 65.6302 393.774 66.3626 394.1 67.0137C394.458 67.6322 395.027 68.2018 395.809 68.7227C396.59 69.2435 397.599 69.7318 398.836 70.1875C400.105 70.6107 401.668 71.0013 403.523 71.3594C407.332 72.1406 410.734 73.166 413.729 74.4355C416.723 75.6725 419.1 77.3652 420.857 79.5137C422.615 81.6296 423.494 84.4128 423.494 87.8633C423.494 90.207 422.973 92.3555 421.932 94.3086C420.89 96.2617 419.393 97.9707 417.439 99.4355C415.486 100.868 413.143 101.991 410.408 102.805C407.706 103.586 404.663 103.977 401.277 103.977C396.362 103.977 392.195 103.098 388.777 101.34C385.392 99.582 382.82 97.3522 381.062 94.6504C379.337 91.916 378.475 89.1165 378.475 86.252H391.805C391.87 88.1725 392.358 89.7188 393.27 90.8906C394.214 92.0625 395.402 92.9089 396.834 93.4297C398.299 93.9505 399.878 94.2109 401.57 94.2109C403.393 94.2109 404.907 93.9668 406.111 93.4785C407.316 92.9577 408.227 92.2741 408.846 91.4277C409.497 90.5488 409.822 89.5397 409.822 88.4004ZM487.557 31.9062V103H472.957V31.9062H487.557ZM509.432 31.9062V43.3809H451.424V31.9062H509.432ZM527.547 61.6914V103H513.484V50.168H526.717L527.547 61.6914ZM543.465 49.8262L543.221 62.8633C542.537 62.7656 541.707 62.6842 540.73 62.6191C539.786 62.5215 538.924 62.4727 538.143 62.4727C536.157 62.4727 534.432 62.7331 532.967 63.2539C531.535 63.7422 530.33 64.4746 529.354 65.4512C528.41 66.4277 527.693 67.6159 527.205 69.0156C526.749 70.4154 526.489 72.0104 526.424 73.8008L523.592 72.9219C523.592 69.5039 523.934 66.3626 524.617 63.498C525.301 60.6009 526.294 58.0781 527.596 55.9297C528.93 53.7812 530.558 52.1211 532.479 50.9492C534.399 49.7773 536.596 49.1914 539.07 49.1914C539.852 49.1914 540.649 49.2565 541.463 49.3867C542.277 49.4844 542.944 49.6309 543.465 49.8262ZM573.445 103.977C569.344 103.977 565.665 103.326 562.41 102.023C559.155 100.689 556.388 98.8496 554.109 96.5059C551.863 94.1621 550.138 91.444 548.934 88.3516C547.729 85.2266 547.127 81.9062 547.127 78.3906V76.4375C547.127 72.4336 547.697 68.7715 548.836 65.4512C549.975 62.1309 551.603 59.25 553.719 56.8086C555.867 54.3672 558.471 52.4954 561.531 51.1934C564.591 49.8587 568.042 49.1914 571.883 49.1914C575.626 49.1914 578.947 49.8099 581.844 51.0469C584.741 52.2839 587.166 54.0417 589.119 56.3203C591.105 58.599 592.602 61.3333 593.611 64.5234C594.62 67.681 595.125 71.1966 595.125 75.0703V80.9297H553.133V71.5547H581.307V70.4805C581.307 68.5273 580.949 66.7858 580.232 65.2559C579.549 63.6934 578.507 62.4564 577.107 61.5449C575.708 60.6335 573.917 60.1777 571.736 60.1777C569.881 60.1777 568.286 60.5846 566.951 61.3984C565.617 62.2122 564.526 63.3516 563.68 64.8164C562.866 66.2812 562.247 68.0065 561.824 69.9922C561.434 71.9453 561.238 74.0938 561.238 76.4375V78.3906C561.238 80.5065 561.531 82.4596 562.117 84.25C562.736 86.0404 563.598 87.5866 564.705 88.8887C565.844 90.1908 567.212 91.1999 568.807 91.916C570.434 92.6322 572.273 92.9902 574.324 92.9902C576.863 92.9902 579.223 92.502 581.404 91.5254C583.618 90.5163 585.522 89.0026 587.117 86.9844L593.953 94.4062C592.846 96.0013 591.333 97.5312 589.412 98.9961C587.524 100.461 585.245 101.665 582.576 102.609C579.907 103.521 576.863 103.977 573.445 103.977ZM627.449 103.977C623.348 103.977 619.669 103.326 616.414 102.023C613.159 100.689 610.392 98.8496 608.113 96.5059C605.867 94.1621 604.142 91.444 602.938 88.3516C601.733 85.2266 601.131 81.9062 601.131 78.3906V76.4375C601.131 72.4336 601.701 68.7715 602.84 65.4512C603.979 62.1309 605.607 59.25 607.723 56.8086C609.871 54.3672 612.475 52.4954 615.535 51.1934C618.595 49.8587 622.046 49.1914 625.887 49.1914C629.63 49.1914 632.951 49.8099 635.848 51.0469C638.745 52.2839 641.17 54.0417 643.123 56.3203C645.109 58.599 646.606 61.3333 647.615 64.5234C648.624 67.681 649.129 71.1966 649.129 75.0703V80.9297H607.137V71.5547H635.311V70.4805C635.311 68.5273 634.952 66.7858 634.236 65.2559C633.553 63.6934 632.511 62.4564 631.111 61.5449C629.712 60.6335 627.921 60.1777 625.74 60.1777C623.885 60.1777 622.29 60.5846 620.955 61.3984C619.62 62.2122 618.53 63.3516 617.684 64.8164C616.87 66.2812 616.251 68.0065 615.828 69.9922C615.438 71.9453 615.242 74.0938 615.242 76.4375V78.3906C615.242 80.5065 615.535 82.4596 616.121 84.25C616.74 86.0404 617.602 87.5866 618.709 88.8887C619.848 90.1908 621.215 91.1999 622.811 91.916C624.438 92.6322 626.277 92.9902 628.328 92.9902C630.867 92.9902 633.227 92.502 635.408 91.5254C637.622 90.5163 639.526 89.0026 641.121 86.9844L647.957 94.4062C646.85 96.0013 645.337 97.5312 643.416 98.9961C641.528 100.461 639.249 101.665 636.58 102.609C633.911 103.521 630.867 103.977 627.449 103.977Z"
        fill="#111111"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_3298_113"
            transform="translate(0 -0.0386282) scale(0.000244141 0.000263066)"
          />
        </pattern>
        <image
          id="image0_3298_113"
          width="4096"
          height="4095"
          href="https://www.starknet.id/visuals/focustreeLogo.png"
        />
      </defs>
    </svg>
  );
};

export default focusTreeIcon;
