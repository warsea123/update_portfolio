
export default function Card({ onClose }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Sorry! This service is currently not available.");
    };

    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 border-orange-500 border-2">

            <div className="flex flex-col gap-3">

                <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                    Send Message
                </span>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <button
                        type="submit"
                        className="rounded-lg bg-amber-500 hover:bg-amber-700 text-white py-2 px-6 transition-colors"
                    >
                        Send
                    </button>
                </form>

            </div>

            <div className="mt-4 text-right">
                <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                    Close
                </button>
            </div>

        </div>
    );
}
