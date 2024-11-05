"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import React from 'react';


// 本ウェブサイトは、株式会社 GLOBAL PAY（以下「当社」）の事業内容等を紹介するサイト
// です。
// 個人情報保護方針
// 当社は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業
// 員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推
// 進いたします。
// 個人情報の管理
// 当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・
// 紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制
// の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理
// を行ないます。
// 個人情報の利用目的
// 本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mail アドレス、電話番
// 号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただ
// く際の目的以外では利用いたしません。
// お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対す
// る回答として、電子メールや資料のご送付に利用いたします。
// 個人情報の第三者への開示・提供の禁止
// 当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場
// 合を除き、個人情報を第三者に開示いたしません。
// ・お客さまの同意がある場合
// ・お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示
// する場合
// ・法令に基づき開示することが必要である場合
// 個人情報の安全対策
// 当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じて
// います。
// ご本人の照会
// お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人で
// あることを確認の上、対応させていただきます。
// 法令、規範の遵守と見直し
// 当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するととも
// に、本ポリシーの内容を適宜見直し、その改善に努めます。
// お問い合せ
// 当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。
// 株式会社 GLOBAL PAY
// 〒169-0073
// 東京都新宿区百人町１－２０－１７ 星野ビル１０１号室
// お問い合わせはこちら(フォームへ)

const PrivacyPolicy: React.FC = () => {
  const { toggleLanguage } = useToggleLanguageConversion();
  return (
    <div className="box-container py-[64px]">
      <div className='flex flex-col gap-10 max-w-[800px]'>

        <section className='flex flex-col gap-1'>
          <h1 className="text-3xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Privacy Policy",
              japTxt: "個人情報保護方針"
            })}
          </h1>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "This website is operated by the Company, and users of this website are required to read the following privacy policy carefully. By using the content of this website, you are deemed to agree to the following terms.",
              japTxt: "このウェブサイトは当社によって運営されており、このウェブサイトの利用者は以下のプライバシーポリシーを注意深くお読みください。このウェブサイトのコンテンツを利用することで、以下の条件に同意したものとみなされます。"
            })}
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Purpose of Use of Personal Information",
              japTxt: "個人情報の利用目的"
            })}
          </h2>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "On this website, we may request personal information such as your name, email address, and phone number when you make inquiries. This personal information will not be used for purposes other than those provided at the time of collection.",
              japTxt: "このウェブサイトでは、お問い合わせの際にお名前、メールアドレス、電話番号などの個人情報をお願いする場合があります。これらの個人情報は、収集時に提供された目的以外には使用されません。"
            })}
          </p>
          <p className="text-sm text-left mt-2">
            {toggleLanguage({
              engTxt: "The personal information entrusted to us will be used for communication from the Company, business guidance, and responses to inquiries, including sending emails and documents.",
              japTxt: "お預かりした個人情報は、当社からのご連絡、業務のご案内およびご質問に対する回答として、メールや資料の送付に使用いたします。"
            })}
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Prohibition of Disclosure and Provision of Personal Information to Third Parties",
              japTxt: "個人情報の第三者への開示・提供の禁止"
            })}
          </h2>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "The Company will appropriately manage the personal information entrusted to us and will not disclose personal information to third parties except in the following cases:",
              japTxt: "当社は、お客様よりお預かりした個人情報を適切に管理し、次の場合を除き、第三者に開示いたしません。"
            })}
          </p>
          <ul className="list-disc ml-4 mt-2 text-sm">
            <li>{toggleLanguage({
              engTxt: "When the customer has given consent.",
              japTxt: "お客様の同意がある場合。"
            })}</li>
            <li>{toggleLanguage({
              engTxt: "When disclosure is necessary for the Company to commission services requested by the customer.",
              japTxt: "お客様が希望されるサービスを行うために当社が業務を委託する業者に対して開示する必要がある場合。"
            })}</li>
            <li>{toggleLanguage({
              engTxt: "When disclosure is required by law.",
              japTxt: "法令に基づき開示することが必要である場合。"
            })}</li>
          </ul>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Safety Measures for Personal Information",
              japTxt: "個人情報の安全対策"
            })}
          </h2>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "The Company has taken comprehensive measures to ensure the accuracy and safety of personal information.",
              japTxt: "当社は個人情報の正確性および安全性確保のために万全の対策を講じています。"
            })}
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Inquiry by the Person",
              japTxt: "ご本人の照会"
            })}
          </h2>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "If a customer wishes to inquire, correct, or delete their personal information, we will respond after confirming the identity of the person making the request.",
              japTxt: "お客様がご本人の個人情報の照会、修正、削除等をご希望される場合には、ご本人であることを確認の上、対応させていただきます。"
            })}
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Compliance with Laws and Regulations and Review",
              japTxt: "法令、規範の遵守と見直し"
            })}
          </h2>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "The Company will comply with applicable Japanese laws and regulations regarding personal information held and will periodically review and improve this policy.",
              japTxt: "当社は、保有する個人情報に関して適用される日本の法令を遵守し、本ポリシーの内容を適宜見直し、その改善に努めます。"
            })}
          </p>
        </section>

        <section className='flex flex-col gap-1'>
          <h2 className="text-2xl font-semibold text-left text-theme">
            {toggleLanguage({
              engTxt: "Contact Us",
              japTxt: "お問い合わせ"
            })}
          </h2>
          <p className="text-sm text-left">
            {toggleLanguage({
              engTxt: "For inquiries regarding the handling of personal information, please contact us at the following:",
              japTxt: "個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。"
            })}
          </p>
          <p className='text-sm text-left'>
            GLOBAL PAY Co., Ltd.
          </p>
          <p className='text-sm text-left'>
            101 Hoshino Building, 1-20-17 Hyakunincho, Shinjuku-ku, Tokyo 169-0073
          </p>
        </section>

      </div>
    </div>
  );
};


export default PrivacyPolicy;
