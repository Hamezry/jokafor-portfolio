import { MoveUpRight } from 'lucide-react';

export default function Contacts() {
	return (
    <div
      className="flex items-center justify-center flex-wrap fixed p-4 top-0 right-0 left-0 z-50"
      style={{
        backdropFilter: "blur(1.3rem)",
      }}
    >
      <Contact
        href="https://www.linkedin.com/in/james-okafor/"
        text="Linkedin"
      />
      <Contact
        href="mailto:okaforjames2709@gmail.com"
        text="Okaforjames2709@gmail.com"
      />
      <Contact href="https://github.com/Hamezry" text="Github" />
      <Contact
        href="https://www.jokafor.vercel.app/jokafor.pdf"
        text="Resume"
      />
    </div>
  );
}

interface ContactProps {
	href: string;
	text: string;
}

const Contact = ({ href, text }: ContactProps) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='text-primary odd:text-foreground mr-2 hover:underline flex items-center justify-center'
		>
			<span>{text}</span>
			<span className='ml-[0.1rem]'>
				<MoveUpRight className='w-3 h-3' />
			</span>
		</a>
	);
};





