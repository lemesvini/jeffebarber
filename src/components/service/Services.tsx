import ServiceCard from "./ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

function Services() {
  return (
    <>
      <Tabs defaultValue="Populares" className="w-full laptop:w-96 rounded">
        <TabsList className="flex justify-center">
          <TabsTrigger value="Populares">Populares</TabsTrigger>
          <TabsTrigger value="Especiais">Especiais</TabsTrigger>
          <TabsTrigger value="Cores">Cores</TabsTrigger>
        </TabsList>
        <TabsContent
          value="Populares"
          className="flex flex-col gap-2 overflow-y-auto no-scrollbar laptop:h-[calc(100dvh-150px)]"
        >
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
        </TabsContent>
        <TabsContent
          value="Especiais"
          className="flex flex-col gap-2 overflow-y-auto no-scrollbar laptop:h-[calc(100dvh-150px)]"
        >
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
        </TabsContent>
        <TabsContent
          value="Cores"
          className="flex flex-col gap-2 overflow-y-auto no-scrollbar laptop:h-[calc(100dvh-150px)]"
        >
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
          <Link
            href={{
              pathname: "/pages/services",
              query: {
                title: "Serviço",
                desc: "Verificar",
                price: "R$50,00",
                duration: "40 min",
              },
            }}
          >
            <ServiceCard
              title="Serviço 1"
              desc=""
              duration="50 minutos"
              price="R$50,00"
            />
          </Link>
        </TabsContent>
      </Tabs>
    </>
  );
}
export default Services;
