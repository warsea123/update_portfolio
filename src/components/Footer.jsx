export default function Footer(){
    return(
        <footer className="bg-orange-500 text-white py-10">
            <div className="container mx-auto px-6">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}