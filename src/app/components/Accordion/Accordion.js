import { AnimatePresence, delay, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="py-4 bg-[#003056] z-10">
      <div className="flex content-end flex-col lg:flex-row-reverse h-fit lg:h-[90vh] w-full overflow-hidden"
      >
        
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
              textMod={item.textMod}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, title, imgSrc, description, textMod }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;
  let textStyle = 'text-white bg-[#003056] sm:flex-col p-5 flex flex-row-reverse items-center gap-4 relative group border-l border-t'
  return (
    <>
                    <button
                className={textStyle + textMod}
                 onMouseEnter={() => setOpen(id)}
                 onMouseLeave={() => setOpen(0)}
              >
                <span
                  style={{
                    writingMode: "vertical-lr",
                  }}
                  className='hidden lg:block text-3xl rotate-180'
                >
                  {title}
                </span>
                <span className="block lg:hidden text-xl">{title}</span>
              </button>


      <AnimatePresence>
        {isOpen && (

          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              //использовать для анимации самих картинок
              // backgroundPosition: "center",
              // backgroundSize: "cover",
            }}


            className="w-full h-full overflow-hidden relative bg-[#003056] flex items-end"
          >
          </motion.div>
        )},
        
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    translate: '10wh'
    // width: "100%",
    // height: "0px",
  },
};

// const descriptionVariants = {
//   open: {
//     opacity: 1,
//     y: "0%",
//     transition: {
//       delay: 0.125,
//     },
//   },
//   closed: { opacity: 0, y: "100%" },
// };

const items = [
  {
    id: 1,
    title: "О НАС",
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    textMod: " justify-start",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "ГЕНПРОЕКТИРОВАНИЕ",
    imgSrc:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    textMod: " justify-center"
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "КОНЦЕПЦИЯ",
    imgSrc:
      "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    textMod: " justify-end",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];

{/* <motion.div
variants={descriptionVariants}
initial="closed"
animate="open"
exit="closed"
>
<p>{description}</p>
</motion.div> */}