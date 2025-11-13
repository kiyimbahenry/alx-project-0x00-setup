import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
            
            {/* Card Component */}
            <Card />
            
            {/* Button Variations */}
            <div className="mt-8 space-y-4">
                <h2 className="text-lg font-semibold">Button Variations</h2>
                
                {/* Size Variations */}
                <div className="space-x-2 mb-4">
                    <Button title="Small Button" size="small" />
                    <Button title="Medium Button" size="medium" />
                    <Button title="Large Button" size="large" />
                </div>
                
                {/* Shape Variations - INCLUDING rounded-lg */}
                <div className="space-x-2 mb-4">
                    <Button title="Rounded Small" shape="rounded-sm" />
                    <Button title="Rounded Medium" shape="rounded-md" />
                    <Button title="Rounded Large" shape="rounded-lg" /> {/* Added this line */}
                    <Button title="Rounded Full" shape="rounded-full" />
                </div>
                
                {/* Using styles prop */}
                <div className="space-x-2 mb-4">
                    <Button 
                        title="Styled Button 1" 
                        styles="bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                    />
                    <Button 
                        title="Styled Button 2" 
                        styles="border-2 border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white" 
                    />
                </div>
                
                {/* Combination of Size and Shape */}
                <div className="space-x-2 mb-4">
                    <Button title="Small & Full" size="small" shape="rounded-full" />
                    <Button title="Large & Large" size="large" shape="rounded-lg" /> {/* Added this line */}
                    <Button title="Medium & Full" size="medium" shape="rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
