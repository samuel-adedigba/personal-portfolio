import LineGradient from "../components/LineGradient"
import useMediaQuery from '../hooks/useMediaQuery'

import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { texts } from "../utils/texts"

const Contact = ({language}) => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e) => {
        const valid = await trigger()
        if (!valid) {
            e.preventDefault()
        }
    }

    const largeScreens = useMediaQuery("(min-width: 1060px)")

    return (
      <section id="contact" className="py-48">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-center w-full"
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              {texts[language].contact.title}
            </p>
            <div className="flex md:justify-center my-5">
              <LineGradient width="w-2/3" />
            </div>
          </div>
        </motion.div>

        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 flex justify-center"
          >
            {largeScreens ? (
              <div
                className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-[170px]
                        before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-2 before:border-purple before:z-[-1]"
              >
                <img
                  alt="profile"
                  className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]"
                  src={require("../assets/profile3.png")}
                />
              </div>
            ) : (
              <img
                alt="profile"
                className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                src={require("../assets/profile3.png")}
              />
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 mt-10 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ccc18dd643fb1754ce7dbe72b4a3332d"
              method="POST"
            >
              <input
                className="w-full bg-purple font-semibold placeholder-opaque-black p-3"
                type="text"
                placeholder={language === "pt" ? "NOME" : "NAME"}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full bg-purple font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-purple font-semibold placeholder-opaque-black p-3 mt-5"
                name="message"
                placeholder={language === "pt" ? "MENSAGEM" : "MESSAGE"}
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="p-5 bg-gradient-rainbow font-semibold mt-5 hover:bg-red hover:text-deep-purple transition duration-500 uppercase"
                type="submit"
              >
                {texts[language].contact.btn}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    );
}

export default Contact