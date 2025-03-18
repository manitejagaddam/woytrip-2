// import { Switch, Route } from "wouter";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { queryClient } from "./lib/queryClient";
// import { Toaster } from "@/components/ui/toaster";
// import NotFound from "@/pages/not-found";
// import Home from "@/pages/home";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import { ThemeProvider } from "@/components/ThemeProvider";

// function Router() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         <Switch>
//           <Route path="/" component={Home} />
//           <Route component={NotFound} />
//         </Switch>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider defaultTheme="light" storageKey="whytrip-theme">
//       <QueryClientProvider client={queryClient}>
//         <Router />
//         <Toaster />
//       </QueryClientProvider>
//     </ThemeProvider>
//   );
// }

// export default App;



import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const base = "/woytrip-2"; // Set the base path

function Router() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch location={location}>
          <Route path={`${base}/`} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="whytrip-theme">
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
