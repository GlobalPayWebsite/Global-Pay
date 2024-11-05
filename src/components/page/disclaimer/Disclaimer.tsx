"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import React from 'react';

const Disclaimer: React.FC = () => {
  const { toggleLanguage } = useToggleLanguageConversion();
  return (
    <div className="box-container py-[64px]">
      <div className='flex flex-col gap-10 max-w-[800px]'>

        <section className='flex flex-col gap-1'>
          <h2 className="text-3xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Disclaimer",
              japTxt: "免責事項"
            })}
          </h2>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "This site is operated by GLOBAL PAY Co., Ltd. (hereinafter referred to as 'the Company'). Users of this site are required to read the following disclaimer carefully. By utilizing the content of this site, you are deemed to agree to the following terms.",
              japTxt: "このサイトはGLOBAL PAY株式会社（以下「当社」といいます）によって運営されています。このサイトの利用者は、以下の免責事項を注意深くお読みください。このサイトのコンテンツを利用することで、以下の条件に同意したものとみなされます。"
            })}
          </p>
          <ul className="list-disc mt-2 text-sm ml-4">
            <li>
              {toggleLanguage({
                engTxt: "The Company strives to ensure the accuracy of the content provided; however, we do not guarantee the accuracy of any information. The Company shall not be held liable for any damages that may arise from the use of this site. Users are encouraged to use this site at their own risk.",
                japTxt: "当社は提供するコンテンツの正確性を確保するために努めていますが、情報の正確性を保証するものではありません。当社はこのサイトの利用により生じたいかなる損害についても責任を負いません。利用者は自己責任でこのサイトを使用してください。"
              })}
            </li>
            <li>
              {toggleLanguage({
                engTxt: "The content and addresses on this site are subject to change or deletion without prior notice.",
                japTxt: "このサイト上のコンテンツやアドレスは予告なく変更または削除される場合があります。"
              })}
            </li>
            <li>
              {toggleLanguage({
                engTxt: "The disclaimer posted on this page may be changed without prior notice.",
                japTxt: "このページに掲載されている免責事項は、予告なく変更される場合があります。"
              })}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
