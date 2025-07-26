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
        <AccordionTrigger>What is Neurowolf?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-3">
          <p>
            Neurowolf is your personal AI workspace. It lets you create custom
            AI voice agents, chat with them in real time, and schedule meetings
            — all in one place. Everything happens in your private account.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How do I get started with Neurowolf?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-3">
          <p>
            Getting started is simple: sign up, log in, and create your first AI
            agent in minutes. From there, you can customize your agent, chat
            with it, and use it to organize and run meetings.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          Who can access my agents and meetings?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-3">
          <p>
            Only you. Neurowolf is a single-user platform, meaning only you can
            create agents, chat with them, and manage meetings. No one else has
            access unless you share the meeting link.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
