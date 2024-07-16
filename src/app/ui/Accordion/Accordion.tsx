import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Accordion = ({ description }: { description: string }) => {
	const [open, setOpen] = useState(false);

	const item = (
		<motion.div
			key="content"
			initial={{ y: -15, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -15, opacity: 0 }}
		
		>
			<p className="text-sm">{description}</p>
		</motion.div>
	);

	return (
		<>
			<h2>
				<motion.button
					type="button"
					onClick={() => setOpen(!open)}
					className="flex items-center justify-between w-full py-5 font-semibold border-b border-gray-300 gap-3 hover:opacity-75"
				>
					<span>Подробнее</span>
					<motion.svg
						animate={
							open
								? {
										rotate: 0,
										transition: { type: "ease" },
								  }
								: {
										rotate: 180,
										transition: { type: "ease" },
								  }
						}
						className="w-3 h-3 shrink-0"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1"
							d="M9 5 5 1 1 5"
						/>
					</motion.svg>
				</motion.button>
			</h2>
			<AnimatePresence>{open ? item : ""}</AnimatePresence>

		</>
	);
};
