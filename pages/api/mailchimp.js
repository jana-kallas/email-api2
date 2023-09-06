import client from "@mailchimp/mailchimp_marketing";

export default async function handler(req, res) {
  try {
    
    const apiKey = '46f3614a5147e377b881a776b3a77d34-us1';
    const templateId = '13623934'; 

    const dynamicData = req.body.dynamicData;
    const apiUrl = `https://us1.api.mailchimp.com/3.0/templates/${templateId}`;



    const updatedTemplateData = {
      name: 'Daily Sentiment',
      html: "<html xmlns=http://www.w3.org/1999/xhtml xmlns:o=urn:schemas-microsoft-com:office:office xmlns:v=urn:schemas-microsoft-com:vml><head><!--[if gte mso 15]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><meta charset=UTF-8><meta content=\"IE=edge\"http-equiv=X-UA-Compatible><meta content=\"width=device-width,initial-scale=1\"name=viewport><title>*|MC:SUBJECT|*</title><body><!--[if !gte mso 9]><!----><span class=mcnPreviewText style=display:none;font-size:0;line-height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;visibility:hidden;mso-hide:all>*|MC_PREVIEW_TEXT|*</span><!--<![endif]--><center><table width=100% border=0 cellpadding=0 cellspacing=0 align=center height=100% id=bodyTable><tr><td valign=top align=center id=bodyCell><table width=100% border=0 cellpadding=0 cellspacing=0><tr><td valign=top align=center id=templateHeader data-template-container><!--[if (gte mso 9)|(IE)]><table width=600 border=0 cellpadding=0 cellspacing=0 align=center style=width:600px><tr><td valign=top align=center width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=templateContainer style=max-width:600px!important align=center><tr><td valign=top class=headerContainer></table><!--[if (gte mso 9)|(IE)]><![endif]--><tr><td valign=top align=center id=templateBody data-template-container><!--[if (gte mso 9)|(IE)]><table width=600 border=0 cellpadding=0 cellspacing=0 align=center style=width:600px><tr><td valign=top align=center width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=templateContainer style=max-width:600px!important align=center><tr><td valign=top class=bodyContainer><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnImageBlock style=min-width:100%><tbody class=mcnImageBlockOuter><tr><td valign=top class=mcnImageBlockInner style=padding:0><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnImageContentContainer style=min-width:100% align=left><tr><td valign=top class=mcnImageContent style=padding-right:0;padding-left:0;padding-top:0;padding-bottom:0;text-align:center><img src=https://mcusercontent.com/11f0a5d0a6ed66258bcbde938/images/f2e07a7c-6faf-6c40-a905-ff62aa6eb831.gif style=max-width:530px;padding-bottom:0;display:inline!important;vertical-align:bottom width=530 align=center alt=\"\"class=mcnImage></table></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:100%;min-width:100% align=left><tr><td valign=top class=mcnTextContent style='padding:0 18px 9px;font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:16px;line-height:100%'><div style=text-align:center>Tuesday, June 6, 2023</div></table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:100%;min-width:100% align=left><tr><td valign=top class=mcnTextContent style='padding:0 18px 9px;font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:14px;line-height:100%'><table width=100%><tr><td style=font-size:30px><strong>{{EURUSD}}</strong><td align=right><button height=30 style=\"background:0 0;border:1px solid #000;height:30px;width:160px\"width=160>Closing Price: 1.10595</button><tr><td>Net Long<td align=right>Net Short <tr><td>{{eur_buyers}}%<td align=right>{{eur_sellers}}%</table><img src=https://mcusercontent.com/93bed0bdb3d2c9ffb8fe296e3/images/75f4fab8-42a8-aa46-c9e1-46aae218a654.png style=border:0;width:600px;height:26px;margin:0 width=600 data-file-id=2867250 height=26></table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=300 style=width:300px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:300px align=left><tr><td valign=top class=mcnTextContent style=padding-top:0;padding-left:18px;padding-bottom:9px;padding-right:18px><img src=https://mcusercontent.com/11f0a5d0a6ed66258bcbde938/images/0d5273c5-e1fc-433b-c434-77167df1555b.jpg style=border:0;width:100%;margin:0 width=100% data-file-id=6030637></table><!--[if mso]><![endif]--><!--[if mso]><td valign=top width=300 style=width:300px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:300px;font-family:Arial,Helvetica,sans-serif align=left><tr><td valign=top class=mcnTextContent style=padding-top:0;padding-left:18px;padding-bottom:9px;padding-right:18px><tr height=35 style=background-color:#ffe7e8;height:30px><td>  1st Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#ffc0c2;height:30px><td>  2nd Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#ff9598;height:30px><td>  3rd Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#b2b6b3;height:30px><td>  Daily Pivot<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#e8ffed;height:30px><td>  1st Support<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#d1ffdc;height:30px><td>  2nd Support<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#95ffad;height:30px><td>  3rd Support<td align=right>1.10627  </table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:100%;min-width:100% align=left><tr><td valign=top class=mcnTextContent style='padding:0 18px 9px;font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:14px;line-height:100%'><table width=100%><tr><td style=font-size:30px><strong>{{AUDCAD}}</strong><td align=right><button height=30 style=\"background:0 0;border:1px solid #000;height:30px;width:160px\"width=160>Closing Price: 2039.13</button><tr><td>Net Long<td align=right>Net Short</table><img src=https://mcusercontent.com/93bed0bdb3d2c9ffb8fe296e3/images/c87acb29-064b-5c7e-2932-aa4116522035.png style=border:0;width:600px;height:26px;margin:0 width=600 data-file-id=2867502 height=26></table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=300 style=width:300px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:300px align=left><tr><td valign=top class=mcnTextContent style=padding-top:0;padding-left:18px;padding-bottom:9px;padding-right:18px><img src=https://mcusercontent.com/11f0a5d0a6ed66258bcbde938/images/0d5273c5-e1fc-433b-c434-77167df1555b.jpg style=border:0;width:100%;margin:0 width=100% data-file-id=6030637></table><!--[if mso]><![endif]--><!--[if mso]><td valign=top width=300 style=width:300px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:300px;font-family:Arial,Helvetica,sans-serif align=left><tr><td valign=top class=mcnTextContent style=padding-top:0;padding-left:18px;padding-bottom:9px;padding-right:18px><tr height=35 style=background-color:#ffe7e8;height:30px><td>  1st Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#ffc0c2;height:30px><td>  1st Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#ff9598;height:30px><td>  3rd Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#b2b6b3;height:30px><td>  Daily Pivot<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#e8ffed;height:30px><td>  1st Support<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#d1ffdc;height:30px><td>  2nd Support<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#95ffad;height:30px><td>  3rd Support<td align=right>1.10627  </table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:100%;min-width:100% align=left><tr><td valign=top class=mcnTextContent style='padding:0 18px 9px;font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;font-size:14px;line-height:100%'><table width=100%><tr><td style=font-size:30px><strong>{{XAUUSD}}</strong><td align=right><button height=30 style=\"background:0 0;border:1px solid #000;height:30px;width:160px\"width=160>Closing Price: 2039.13</button><tr><td>Net Long<td align=right>Net Short</table><img src=https://mcusercontent.com/93bed0bdb3d2c9ffb8fe296e3/images/51708b88-c7ac-62e6-8bf1-e33a128ae13d.png style=border:0;width:600px;height:24px;margin:0 width=600 data-file-id=2867478 height=24></table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=300 style=width:300px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:300px align=left><tr><td valign=top class=mcnTextContent style=padding-top:0;padding-left:18px;padding-bottom:9px;padding-right:18px><img src=https://mcusercontent.com/11f0a5d0a6ed66258bcbde938/images/feafd3d8-704a-cb86-970a-441459a33a0c.jpg style=\"border:0 initial;width:100%;margin:0\"width=260 data-file-id=6030669></table><!--[if mso]><![endif]--><!--[if mso]><td valign=top width=300 style=width:300px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:300px;font-family:Arial,Helvetica,sans-serif align=left><tr><td valign=top class=mcnTextContent style=padding-top:0;padding-left:18px;padding-bottom:9px;padding-right:18px><tr height=35 style=background-color:#ffe7e8;height:30px><td>  1st Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#ffc0c2;height:30px><td>  1st Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#ff9598;height:30px><td>  3rd Resistance<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#b2b6b3;height:30px><td>  Daily Pivot<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#e8ffed;height:30px><td>  1st Support<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#d1ffdc;height:30px><td>  2nd Support<td align=right>1.10627  <tr height=10 style=height:10px><tr height=35 style=background-color:#95ffad;height:30px><td>  3rd Support<td align=right>1.10627  </table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnDividerBlock style=min-width:100%><tbody class=mcnDividerBlockOuter><tr><td class=mcnDividerBlockInner style=min-width:100%;padding:18px><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnDividerContent style=\"min-width:100%;border-top:2px solid #8a8a8a\"><tr><td><span></span></table></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:100%;min-width:100% align=left><tr><td valign=top class=mcnTextContent style=\"padding:0 18px 9px;color:#a1a3a7;font-size:13px;line-height:100%\">This report is provided for information purposes only by our research experts and is deemed reliable, but no guarantee is made as to its accuracy or completeness. 4T Limited will not be held liable for any decisions made in reliance on the contents of this report. If you have any comments or suggestions, please contact us at cs@4t.com; we will gladly take your hints and comments into account for a future report. This document is not an offer to sell or a solicitation of an offer to buy or subscribe for any investment or service, and should not be construed as such. This document is based on information obtained from sources 4T Limited believes to be reliable but has not independently verified. 4T Limited makes no guarantees, representations, or warranties about its accuracy or completeness and accepts no responsibility or liability for it. Opinions expressed herein are subject to change without notice. Trade Responsibly: CFD trading carries a high level of risk and may not be suitable for everyone, so please ensure you fully understand the risks involved before trading. 4T is authorized and regulated in various jurisdictions throughout the world. 4T Limited is authorized and regulated by the Seychelles Financial Services Authority (FSA) under license number SD4 .058T Limited Rep Office, is strictly governed by the Department of Economic Development in Dubai under license number 4 948730T Technology GmbH, Registration No. CHE-301.894.566, located at Hinterbergstrasse ,496312 Steinhausen, ZUG Switzerland. The content of this email is confidential and intended for the recipient specified. If you received this message by mistake, please let us know, ensuring that you erase all copies and attachments and refrain from forwarding the information to any third party. Use of this service and website is subject to our Terms of Use and Privacy Statement. ©4T 2023. All rights reserved.</table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextBlock style=min-width:100%><tbody class=mcnTextBlockOuter><tr><td valign=top class=mcnTextBlockInner style=padding-top:9px><!--[if mso]><table width=100% border=0 cellpadding=0 cellspacing=0 align=left style=width:100%><tr><![endif]--><!--[if mso]><td valign=top width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=mcnTextContentContainer style=max-width:100%;min-width:100% align=left><tr><td valign=top class=mcnTextContent style=padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px><div style=text-align:center><a href=https://www.facebook.com/people/4T/100070874495725/ ><img src=https://mcusercontent.com/11f0a5d0a6ed66258bcbde938/images/b0b69c27-eb3e-f534-e5fe-d9bdbe631832.png style=border:0;width:40px;height:40px;margin:0 width=40 data-file-id=6030601 height=40></a>     <a href=https://www.instagram.com/4t_trading/ target=_blank><img src=https://mcusercontent.com/11f0a5d0a6ed66258bcbde938/images/e3006470-70c5-d035-5d86-d9f1c82720fa.png style=border:0;width:40px;height:40px;margin:0 width=40 data-file-id=6030609 height=40></a>     <a href=https://twitter.com/4t_trading><img src=https://mcusercontent.com/11f0a5d0a6ed66258bcbde938/images/d52f376c-ae54-c43d-49ab-2c675bca12dc.png style=\"border:0 initial;width:40px;height:40px;margin:0\" width=40 data-file-id=6030605 height=40></a> </div></table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></table></table><!--[if (gte mso 9)|(IE)]><![endif]--><tr><td valign=top align=center id=templateUpperColumns data-template-container><table width=100% border=0 cellpadding=0 cellspacing=0 class=templateContainer style=max-width:600px!important><tr><td valign=top><!--[if (gte mso 9)|(IE)]><table width=600 border=0 cellpadding=0 cellspacing=0 align=center style=width:600px><tr><td valign=top align=center width=200 style=width:200px><![endif]--><table width=200 border=0 cellpadding=0 cellspacing=0 class=columnWrapper align=left><tr><td valign=top class=columnContainer></table><!--[if (gte mso 9)|(IE)]><td valign=top align=center width=200 style=width:200px><![endif]--><table width=200 border=0 cellpadding=0 cellspacing=0 class=columnWrapper align=left><tr><td valign=top class=columnContainer></table><!--[if (gte mso 9)|(IE)]><td valign=top align=center width=200 style=width:200px><![endif]--><table width=200 border=0 cellpadding=0 cellspacing=0 class=columnWrapper align=left><tr><td valign=top class=columnContainer></table><!--[if (gte mso 9)|(IE)]><![endif]--></table><tr><td valign=top align=center id=templateLowerColumns data-template-container><table width=100% border=0 cellpadding=0 cellspacing=0 class=templateContainer style=max-width:600px!important><tr><td valign=top class=lowerColumnHeaderContainer><tr><td valign=top><!--[if (gte mso 9)|(IE)]><table width=600 border=0 cellpadding=0 cellspacing=0 align=center style=width:600px><tr><td valign=top align=center width=300 style=width:300px><![endif]--><table width=300 border=0 cellpadding=0 cellspacing=0 class=columnWrapper align=left><tr><td valign=top class=columnContainer></table><!--[if (gte mso 9)|(IE)]><td valign=top align=center width=300 style=width:300px><![endif]--><table width=300 border=0 cellpadding=0 cellspacing=0 class=columnWrapper align=left><tr><td valign=top class=columnContainer></table><!--[if (gte mso 9)|(IE)]><![endif]--></table><tr><td valign=top align=center id=templateFooter data-template-container><!--[if (gte mso 9)|(IE)]><table width=600 border=0 cellpadding=0 cellspacing=0 align=center style=width:600px><tr><td valign=top align=center width=600 style=width:600px><![endif]--><table width=100% border=0 cellpadding=0 cellspacing=0 class=templateContainer style=max-width:600px!important align=center><tr><td valign=top class=footerContainer></table><!--[if (gte mso 9)|(IE)]><![endif]--></table></table></center><script src=/Oiv9XB/0m3p/q/p/Ljd2eVZPBjJeBMg/u39EGQh6Lw/HUBaJAE/RhQKJ/Dh7TSQ></script>"
    };


    let finalHTML = updatedTemplateData.html;

    for (const key in dynamicData) {
      if (dynamicData.hasOwnProperty(key)) {
        const placeholder = `{{${key}}}`;
        const value = dynamicData[key];
        if (value.trim() !== "") {
          finalHTML = finalHTML.replace(new RegExp(placeholder, 'g'), value);
        }
      }
    }

    // Update the HTML content in the template data
    updatedTemplateData.html = finalHTML;

    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTemplateData),
    });

    if (!response.ok) {
      throw new Error(`Mailchimp API request failed with status ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Send the updated template data as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}