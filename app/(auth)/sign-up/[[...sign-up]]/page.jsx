import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-gray-300">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex w-full h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Hii"
            src="sign.png"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to AI Interview Mocker 🦑
            </h1>
            <p className="mt-4 leading-relaxed text-gray-500">
              Prepare for your interviews with AI-powered mock sessions and real-time feedback.
            </p>
            <div className="w-full max-w-md mx-auto mt-6">
              <SignUp redirectUrl="/dashboard" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
