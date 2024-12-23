
import LayoutAuth from "@/ui/layout/layoutAuth";
import '../ui/styles/globals.css'
import FormLogin from "@/ui/components/formLogin";

export default function Home() {
  return (
    <LayoutAuth title="Login">
      <FormLogin />
    </LayoutAuth>
  );
}
