import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordian() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is NeuroWolf</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Neurowolf is a platform that helps you build and manage your
            AI-powered applications. It provides tools and services to
            streamline the development and deployment of AI solutions.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How can i get started with neurowolf.ai
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            You can get started with neurowolf.ai by signing up for an account
            on our website, creating a new project, and following our
            quick-start guide. We also offer tutorials and documentation to help
            you along the way.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What types of AI models does neurowolf.ai support?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            neurowolf.ai supports a wide range of AI models, including but not
            limited to natural language processing, computer vision, and
            predictive analytics. We continuously update our platform to support
            the latest AI technologies.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
