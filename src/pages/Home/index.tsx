import Button from "components/Button";
import NavItem from "components/NavItem";
import Link from "components/Link";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import ErrorMessage from "components/ErrorMessage";

const Home = () => {
  return (
    <main class="flex flex-col h-full overflow-auto container px-4 py-8 space-y-10 mx-auto">
      <div class="space-y-4">
        <h4>Buttons</h4>
        <div class="flex flex-wrap gap-2">
          <Button>Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="link">Button</Button>
          <Button variant="none">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="destructive">Button</Button>
        </div>
      </div>
      <div class="space-y-4">
        <h4>Form Fields</h4>
        <div class="space-y-4">
          <p>Input</p>
          <Input id="name" name="name" />
          <p>Textarea</p>
          <Textarea />

          <p>Error Message</p>
          <ErrorMessage error="Field is required" />
        </div>
      </div>
      <div class="space-y-4">
        <h4>Links</h4>
        <div class="flex flex-col gap-4">
          <NavItem href="/">Link</NavItem>
          <NavItem href="/test" end>
            Link
          </NavItem>
          <Link href="/">Link</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
