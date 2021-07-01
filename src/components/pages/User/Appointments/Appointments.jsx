import React from 'react'

export default function Appointments() {
    return (
        <div className="h-auto">

            <form id="contact-me" class="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 ">
            <h2 class="w-full my-2 text-3xl font-bold leading-tight my-5">Request appointmets</h2>
                
                <div class="flex flex-wrap mb-6">
                    <div class="relative w-full appearance-none label-floating">
                        <textarea class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="message" type="text" placeholder="Describe your symptoms"></textarea>
                            <label for="message" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Message...
                        </label>
                    </div>
                </div>
                <div class="flex flex-wrap mb-6">
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-300">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">Select a photo</span>
                        <input type='file' className="hidden" />
                    </label>
                </div>
                <div class="flex flex-wrap mb-6">
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-300">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">Select a video</span>
                        <input type='file' className="hidden" />
                    </label>
                </div>
                <div class="flex flex-wrap mb-6">
                    <h3 className="mb-2 text-2xl font-semibold text-gray-600">
                        Would you need a virtual appointment or a face-to-face appointment?
                    </h3>
                        <button className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center m-1">
                        Virtual</button>
                        <button className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center m-1">
                        Face-to-face</button>
                </div>
                <div class="flex flex-wrap mb-6">
                    <button class="w-full shadow bg-blue-300 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Send
                    </button>
                </div>
            </form>
            

        </div>
    )
}
