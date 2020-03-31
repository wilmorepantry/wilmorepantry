module.exports = ({ href, text, color = "blue-400" } = {}) => {
  if (href) {
    return `
<a
    href="${href}"
    class="block w-full md:w-1/2 p-2 my-4 mx-auto border-4 border-${color} font-sans text-center hover:bg-${color} font-semibold text-xl"
    >${text}</a
>
		`;
  }
  return `
<button
    class="block w-full md:w-1/2 p-2 my-4 mx-auto border-4 border-${color} font-sans text-center hover:bg-${color} font-semibold text-xl"
    >${text}</button
>
  `;
};
