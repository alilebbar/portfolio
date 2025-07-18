import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("mwpqpkdl");
  if (state.succeeded) {
    return (
      <p className="text-center text-green-500">
        Message envoyée avec succée !
      </p>
    );
  }
  return (
    <>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contactez-moi</h2>
        <p className="text-gray-600 mb-8">
          Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter !
        </p>

        {/* Email direct */}
        <a
          href="mailto:lbr.abdelali@gmail.com"
          className="text-blue-600 font-medium underline hover:text-blue-800"
        >
          lbr.abdelali@gmail.com
        </a>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-6 mt-6 text-gray-700 text-lg">
          <a
            href="https://github.com/alilebbar"
            target="_blank"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abdelali-lebbar-b1745a87"
            target="_blank"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
        {/* Formulaire de contact */}

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 max-w-md mx-auto text-left border border-gray-300 p-6 rounded-lg shadow-md"
        >
          <p className="text-gray-600 mt-8 mb-4">
            Ou utilisez le formulaire ci-dessous :
          </p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
