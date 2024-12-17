import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface CardsProps {
  iconComponent: JSX.Element;
  link: string;
  title: string;
  description: string;
}

export default function AccountNavigationCards({
  iconComponent,
  link,
  title,
  description,
}: CardsProps) {
  return (
    <Link to={link}>
      <Card className="w-[350px] h-[125px]">
        <CardHeader>
          {iconComponent}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{/* Content can go here */}</CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </Link>
  );
}
