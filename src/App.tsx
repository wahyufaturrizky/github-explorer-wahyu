import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ListGitHubRepoPage from "./pages/ListGitHubRepoPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListGitHubRepoPage />
    </QueryClientProvider>
  );
}

export default App;
