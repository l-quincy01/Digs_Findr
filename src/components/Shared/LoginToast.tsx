import { useToast } from "../hooks/use-toast";
// import { Button } from "@/components/ui/button"
// import { ToastAction } from "@/components/ui/toast"

import { Button } from "../ui/button";
import { ToastAction } from "../ui/toast";

interface LoginToastProps {
  title: string;
  msg: string;
}

export default function LoginToast({ title, msg }: LoginToastProps) {
  const { toast } = useToast();

  return (
    <Button variant="outline" onClick={}>
      Add to calendar
    </Button>
  );
}
