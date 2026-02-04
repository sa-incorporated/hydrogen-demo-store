import type {MetaFunction} from '@shopify/remix-oxygen';

export const meta: MetaFunction = () => {
  return [{title: 'Cookie Policy - Simple Chat'}];
};

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
      <p className="text-gray-500 mb-8">The legal stuff</p>

      <div className="prose prose-gray max-w-none">
        <p>
          Our privacy policy describes how we collect, use, and share
          information, as well as the choices you have regarding your data. One
          way we collect information is through the use of technologies called
          "cookies" and other similar technologies, such as pixels, local
          storage, and software development kits (SDKs).
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          A "cookie" is a small text file that a website stores in your web
          browser (e.g., Google Chrome, Apple Safari) to save and retrieve
          information. Other technologies function similarly to collect data
          about your browsing activity. This policy refers to all of these
          technologies collectively as "Cookies."
        </p>
        <p>
          We use both <strong>session Cookies</strong> (which expire when you
          close your browser) and <strong>persistent Cookies</strong> (which
          last until you or your browser deletes them). For example, we use
          persistent Cookies to store your language preferences so you do not
          have to configure them on each visit to Simple Chat.
        </p>
        <p>
          Some Cookies we use are associated with your Simple Chat account
          (including personal information such as your email address), while
          others are not.
        </p>

        <h2>How We Use Cookies</h2>
        <p>We use Cookies for the following primary purposes:</p>

        <h3>1. Essential Cookies</h3>
        <p>
          These Cookies are required for Simple Chat to function as expected.
          They allow you to log in and out of your account, maintain your
          session, and remember your settings and preferences (such as your
          preferred language or privacy settings).
        </p>

        <h3>2. Analytics Cookies</h3>
        <p>
          We use analytics Cookies to understand how our services are being used
          so we can make improvements. For example, these Cookies can tell us
          how many people use a certain feature, its popularity, or whether
          users open the emails we send. We may work with third-party analytics
          providers, such as Google Analytics, who also use Cookies to provide
          these services.
        </p>

        <h3>3. Marketing Cookies</h3>
        <p>
          We may work with third-party advertising vendors to market Simple Chat
          on other websites and applications. These providers may use Cookies to
          help us deliver relevant advertising to you on other platforms.
        </p>

        <h2>Where We Use Cookies</h2>
        <p>
          We use Cookies within our Simple Chat application and on our website,
          simple-chat.com.
        </p>

        <h2>Your Choices and Controls</h2>
        <p>
          You have several options to control or limit how we and our partners
          use Cookies:
        </p>

        <ul>
          <li>
            <strong>Browser Settings:</strong> Most web browsers provide options
            to manage Cookies. You can typically configure your browser to block
            "third-party cookies," which are Cookies from sites other than the
            one you are currently visiting. These options vary by browser, so
            please check your browser's settings for more information.
          </li>
          <li>
            <strong>Do Not Track:</strong> We support the "Do Not Track" (DNT)
            privacy setting that you can enable in some web browsers. This
            setting signals your preference regarding the tracking of your
            online activity.
          </li>
          <li>
            <strong>Mobile Device Settings:</strong> Your mobile device has
            settings that allow you to control how advertising partners use your
            information.
            <ul>
              <li>
                On <strong>Android</strong>, you can enable the "Opt out of Ads
                Personalization" setting.
              </li>
              <li>
                On <strong>Apple iOS</strong>, you can adjust your choice by
                navigating to Privacy & Security → Tracking.
              </li>
            </ul>
          </li>
          <li>
            <strong>Online Tools:</strong> You can use online tools, such as the
            Digital Advertising Alliance's Browser Check site, to manage how
            Cookies are used for advertising based on your device and browser.
          </li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          Effective Date: September 15, 2025
        </p>
      </div>
    </div>
  );
}
