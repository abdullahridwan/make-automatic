import config from '../public/config.json';

export default function AppButton() {
    return (
        <div className="flex justify-center">
            <a
                className="inline-flex items-center my-2 px-6 py-4 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg bg-gray-900 rounded-full"
                style={{ backgroundColor: config.primaryColor }}
                href={config.linkToAppStore}
            >
                <span className="justify-center">👉 Get the App</span>
            </a>
        </div>
    );
}