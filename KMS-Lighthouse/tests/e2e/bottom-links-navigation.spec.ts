import { test, expect } from "../fixtures/base";

test.describe("Test terms and privacy policy", () => {
  test("click on 'Terms and privacy Policy' should open terms and privacy policy page", async ({
    mainPage,
    page,
    termsAndPrivacyPolicyPage,
  }) => {
    await mainPage.termsAndPrivacyPolicyLink.click();
    await page.waitForURL("**/terms-and-privacy-policy/");
    await expect(termsAndPrivacyPolicyPage.mainHeading).toBeVisible();
  });

  test("click on 'Privacy Policy' should open privacy policy page", async ({ termsAndPrivacyPolicyPage }) => {
    await expect(termsAndPrivacyPolicyPage.page.locator("body")).toMatchAriaSnapshot(`
        - heading "Terms and Privacy Policy" [level=1]
        - paragraph: This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable Information’ (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
        - paragraph: What personal information do we collect from the people that visit our blog, website or app?
        - paragraph: When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.
        - paragraph: When do we collect information?
        - paragraph: We collect information from you in various cases, such as when you register on our site, place an order, subscribe to a newsletter, fill out a form, Open a Support Ticket or enter information on our site.
        - paragraph: Provide us with feedback on our products or services
        - paragraph: How do we use your information?
        - paragraph: "We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:"
        - list:
          - listitem: To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.
          - listitem: To improve our website in order to better serve you.
          - listitem: To allow us to better service you in responding to your customer service requests.
          - listitem: To administer a contest, promotion, survey or other site feature.
          - listitem: To quickly process your transactions.
          - listitem: To ask for ratings and reviews of services or products
          - listitem: To follow up with them after correspondence (live chat, email or phone inquiries)
        - paragraph: How do we protect your information?
        - paragraph: We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. We never ask for credit card numbers.
        - paragraph: Do we use ‘cookies’?
        - paragraph: Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
        - paragraph: "We use cookies to:"
        - list:
          - listitem: Understand and save user’s preferences for future visits.
          - listitem: Keep track of advertisements.
          - listitem: Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.
        - paragraph: You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser’s Help Menu to learn the correct way to modify your cookies.
        - paragraph: "If users disable cookies in their browser:"
        - paragraph: If you turn cookies off, some of the features that make your site experience more efficient may not function properly. Some of the features that make your site experience more efficient and may not function properly.
        - paragraph: Third-party disclosure
        - paragraph: We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property or safety.
        - paragraph: However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
        - paragraph: Third-party links
        - paragraph: Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
        - paragraph: Google
        - paragraph:
          - text: Google’s advertising requirements can be summed up by Google’s Advertising Principles. They are put in place to provide a positive experience for users.
          - link /https:\\/\\/support\\.google\\.com\\/adwordspolicy\\/answer\\/\\d+\\?hl=en/:
            - /url: https://support.google.com/adwordspolicy/answer/1316548?hl=en
          - text: We use Google AdSense Advertising on our website.
        - paragraph: Google, as a third-party vendor, uses cookies to serve ads on our site. Google’s use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
        - paragraph: "We have implemented the following:"
        - paragraph: We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.
        - paragraph: "Opting out: Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on."
        - paragraph: COPPA (Children Online Privacy Protection Act)
        - paragraph: /When it comes to the collection of personal information from children under the age of \\d+ years old, the Children’s Online Privacy Protection Act \\(COPPA\\) puts parents in control\\. The Federal Trade Commission, United States’ consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children’s privacy and safety online\\. We do not specifically market to children under the age of \\d+ years old\\./
        - paragraph: CAN SPAM Act
        - paragraph: "The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations. We collect your email address in order to:"
        - list:
          - listitem: Send information, respond to inquiries, and/or other requests or questions
          - listitem: Process orders and to send information and updates pertaining to orders.
          - listitem: Send you additional information related to your product and/or service
          - listitem: Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.
        - paragraph: "To be in accordance with CANSPAM, we agree to the following:"
        - list:
          - listitem: Not use false or misleading subjects or email addresses.
          - listitem: Identify the message as an advertisement in some reasonable way.
          - listitem: Include the physical address of our business or site headquarters.
          - listitem: Monitor third-party email marketing services for compliance, if one is used.
          - listitem: Honor opt-out/unsubscribe requests quickly.
          - listitem: Allow users to unsubscribe by using the link at the bottom of each email.
        - paragraph: If at any time you would like to unsubscribe from receiving future emails, you can email us at
        - list:
          - listitem: Follow the instructions at the bottom of each email and we will promptly remove you from subscription correspondence.
        `);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
