import Image from "next/image";
import { Title1 } from "@/app/components/ui/Typography/Title";
import arrow from "@/public/banner-send-arrow.svg";
import ozzie_banner from "@/public/ozzie-in-circle.svg";

const styles = {
  wrapper: "w-full md:h-32 bg-[#FCE385]",
  container:
    "flex flex-col py-4  gap-3 md:gap-10  md:flex-row md:w-4/5 h-full mx-auto justify-center items-center",
  bannerSection: "flex-1/3 flex justify-center",
  section: "flex flex-row gap-2 md:gap-6 items-center",
  inputContainer:
    "w-[218px] md:w-[320px] text-left border-2 border-black rounded-[5px] p-2 placeholder:opacity-50 placeholder:text-black placeholder:text-[0.92rem] md:placeholder:text-base",
};

export default function NewsletterBanner() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Image
            className={styles.bannerSection}
            src={ozzie_banner}
            alt="Small Logo Ozzie Head Circle"
            width={80}
            height={80}
          />
          <Title1 className="text-[24px] md:text-[32px] font-normal">
            Join Our Newsletter!
          </Title1>
        </div>
        <div>
          <form
            action="https://luskinoic.us9.list-manage.com/subscribe/post?u=37e11b1c16da9aeab639769a6&amp;id=6ede087f13&amp;f_id=00dfece1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <input type="hidden" name="tags" value="2637372"></input>
            <div className={styles.bannerSection}>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                aria-required="true"
                aria-label="Email Address"
                placeholder="Enter your email address"
                className={styles.inputContainer}
              />
              <button
                type="submit"
                name="subscribe"
                aria-label="Subscribe Button"
                id="mc-embedded-subscribe"
                value="Subscribe"
              >
                <Image
                  src={arrow}
                  alt="Submit"
                  className="hover:border hover:border-black rounded mx-3"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
