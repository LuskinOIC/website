import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TabbedSectionType } from "../constants/types";

export default function TabbedSection({
  keys,
  labels,
  contents
}: TabbedSectionType) {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        {keys.map((key: string, index: number) => (
          <TabsTrigger value={key}>{labels[index]}</TabsTrigger>
        ))}
        <TabsTrigger value="planning">Plan Your Visit</TabsTrigger>
        <TabsTrigger value="billing">Billing & Insurance</TabsTrigger>
        <TabsTrigger value="rights">Patient Rights & Responsibilities</TabsTrigger>
        <TabsTrigger value="prep">Appointment Preparation</TabsTrigger>
        <TabsTrigger value=""></TabsTrigger>
      </TabsList>
      {keys.map((key: string, index: number) => (
        <TabsContent value={key}>{contents[index]}</TabsContent>
      ))}
    </Tabs>
  );
}
