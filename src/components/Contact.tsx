import './Contact.css'

function Contact(){
    return(
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-8 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gray-900 dark:text-white">
                  Contact Me
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-lg dark:text-gray-400">
                  Have a question or want to work together?
                </p>
              </div>
            </div>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <Input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <Button className="w-full">Submit</Button>
            </form>
          </div>
        </section>
    )
}
export default Contact