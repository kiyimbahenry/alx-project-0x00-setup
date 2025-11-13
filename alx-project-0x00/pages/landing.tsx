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
                <div className="space-x-2">
                    <Button title="Small Button" size="small" />
                    <Button title="Medium Button" size="medium" />
                    <Button title="Large Button" size="large" />
                </div>
                
                {/* Shape Variations */}
                <div className="space-x-2">
                    <Button title="Rounded Small" shape="rounded-sm" />
                    <Button title="Rounded Medium" shape="rounded-md" />
                    <Button title="Rounded Full" shape="rounded-full" />
                </div>
                
                {/* Combination of Size and Shape */}
                <div className="space-x-2">
                    <Button title="Small & Full" size="small" shape="rounded-full" />
                    <Button title="Large & Small" size="large" shape="rounded-sm" />
                    <Button title="Medium & Full" size="medium" shape="rounded-full" />
                </div>
                
                {/* With Custom Styles */}
                <div className="space-x-2">
                    <Button 
                        title="Custom Red" 
                        size="medium" 
                        shape="rounded-full" 
                        className="bg-red-500 hover:bg-red-600" 
                    />
                    <Button 
                        title="Custom Green" 
                        size="large" 
                        shape="rounded-md" 
                        className="bg-green-500 hover:bg-green-600" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
