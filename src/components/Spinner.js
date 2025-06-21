import './Spinner.css'

function Spinner() {
    return(
        <div className="flex flex-col items-center space-y-2 gap-12">
            <div className="spinner"></div>
            <p className="text-white text-3xl font-semibold">Loading...</p>
        </div>
    );
};

export default Spinner;