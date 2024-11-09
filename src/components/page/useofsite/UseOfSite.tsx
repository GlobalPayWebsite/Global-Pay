"use client";
import { useToggleLanguageConversion } from '@/utils/hooks/hooks';
import React from 'react';


const UseOfsite: React.FC = () => {
    const { toggleLanguage } = useToggleLanguageConversion();
    return (
        <div className="box-container py-[64px]">
            <div className='flex flex-col gap-10 max-w-[800px]'>
                <section className='flex flex-col gap-1'>
                    <h2 className="text-3xl font-semibold text-left text-theme">
                        {toggleLanguage({
                            engTxt: "Site Policy", japTxt: "サイトのご利用について"
                        })}
                    </h2>
                    <p className="text-sm text-left">
                        {toggleLanguage({
                            engTxt: "Please read the following terms and conditions when using our website (this “Site”). The users will be considered to have agreed to the terms and conditions stated below when using the contents of this Site. The contents of this page may be subject to change at anytime without notice.",
                            japTxt: "当ウェブサイト（以下「当サイト」といいます 。 ）を利用される際には、下記の利用条件 をお読みください。当サイトのコンテンツを利用された場合は、下記の事項に同意された ものとみなします。 なお、本ページに掲載している内容は予告なしに変更する場合があります。"
                        })}
                    </p>
                </section>
                <section className='flex flex-col gap-1'>
                    <h2 className="text-3xl font-semibold text-left text-theme">{toggleLanguage({
                        engTxt: "Copyrights", japTxt: "著作権について"
                    })}</h2>
                    <p className="text-sm text-left">
                        {toggleLanguage({
                            engTxt: "The copyright to the contents (including documents and pictures) included in this Site belong to Global Pay Co., Ltd. (“Global Pay”) or other copyright owners who have authorized its use on this Site. Other than for personal use or uses explicitly permitted under the copyright law, the contents of this Site may not be copied, transferred, revised etc. without the express written authorization by Global Pay.",
                            japTxt: "当サイトに掲載されているコンテンツ（文章、画像等を含む）の著作権は、株式会社 Global Pay Co., Ltd.（以下「当社」といいます。 ）またはその作成者に帰属します。これらのコンテ ンツについて、私的使用その他法律で明示的に認められる場合を除き、当社の事前の書面 による許可なく複製、転用、改変等をすることを禁止します。"
                        })

                        }
                    </p>
                </section>
            </div>
        </div>
    );
};

export default UseOfsite;
