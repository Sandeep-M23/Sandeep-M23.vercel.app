 export const container = {
   hidden: {
     opacity: 0,
   },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.5,
     },
   },
   exit: {
     opacity: 0,
     transition: {
       delay: 0.2,
       duration: 0.5,
     },
   },
 };

 export const divider = {
   hidden: { width: 0 },
   visible: {
     width: "100%",
     transition: {
       delay: 0.2,
       duration: 0.8,
     },
   },
 };

 export const InViewDivider = {
   hidden: { width: 0 },
   whileInView: {
     width: "100%",
     transition: {
       delay: 0.2,
       duration: 0.8,
     },
   },
 };

 export const box = {
   hidden: { opacity: 0, y: 100 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
 };

 export const stack = {
   hidden: { opacity: 0, y: 100 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
 };

 export const ContactDivider = {
   hidden: { width: 0 },
   visible: {
     width: "13%",
     transition: {
       delay: 0.2,
       duration: 0.8,
     },
   },
 };

 export const text = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       delay: 0.4,
       duration: 0.8,
     },
   },
 };

 export const listItem = {
   visible: (i) => ({
     opacity: 1,
     transition: {
       delay: i * 0.4,
     },
   }),
   hidden: { opacity: 0 },
 };

 export const InViewStepperDivider = {
   hidden: { height: 0 },
   whileInView: {
     height: "100%",
     transition: {
       delay: 0.2,
       duration: 0.8,
     },
   },
 };

 export const StepperBox = {
   hidden: { opacity: 0, y: 10 },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       delay: 0.4,
       duration: 0.8,
     },
   },
 };

 export const center = (direction) => {
   return {
     hidden: { opacity: 0, x: direction === "right" ? -100 : 100 },
     whileInView: {
       opacity: 1,
       x: 0,
       transition: {
         duration: 0.5,
       },
     },
   };
 };

 export const ProjectCardCenter = {
   hidden: { opacity: 0, y: 100 },
   whileInView: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.4 },
   },
 };

 export const NavBox = {
   hidden: { opacity: 0, y: -100 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.5, staggerChildren: 0.5 },
   },
   exit: {
     opacity: 0,
     transition: {
       delay: 0.2,
       duration: 0.5,
     },
   },
 };

 export const secondaryBox = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

 export const boxItem = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.4,
    },
  }),
  hidden: { opacity: 0 },
 };

 export const flex = {
   hidden: {
     opacity: 0,
     y: -100,
   },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.6 }
   },
 };

