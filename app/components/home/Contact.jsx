import React from 'react'

function Contact() {
    return (
        <div className="my-10">
            <div className="container mx-auto md:flex p-5 ">
                <div className="flex-1">
                    <h3 clasName="text-6xl font-semibold ">Contact Us</h3>
                    <p className="text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem et aliquam veniam ducimus nobis. Dolorum quae ducimus molestias quos rerum!</p>
                </div>
                <div className="flex-1 bg-gray-100 p-5">
                    <form>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="my-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Enter full name" id='name' className="w-full outline-0 p-3 rounded-md" />
                            </div>
                            <div className="my-2">
                                <label htmlFor="email">Email</label>
                                <input type="emailygyg" placeholder="Enter full name" id='name' className="w-full outline-0 p-3 rounded-md" />
                            </div>
                            <div className="my-2 col-span-2">
                                <label htmlFor="name">Subject</label>
                                <input type="text" placeholder="Enter full name" id='name' className="w-full outline-0 p-3 rounded-md" />
                            </div>

                            <div className="my-2 col-span-2">
                                  <label for="">Message</label>
                                  <textarea class="w-full p-3 outline-0" name="" id="" rows="8"></textarea>
                            </div>
                            
                        </div>
                        <div>
                            <button className="w-full bg-green-600 p-3 text-white rounded-md">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact