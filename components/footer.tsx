export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lavender/50 to-medium-blue/50 px-4 py-8 text-center text-sm text-gray-700">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
      </div>
    </footer>
  );
};
