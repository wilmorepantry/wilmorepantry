module.exports = ({ href, text, color = "blue-400" } = {}) => {
  if (href) {
    return `
<a
    href="${href}"
    class="block w-full md:w-1/2 p-2 my-4 border-4 border-${color} font-sans text-center hover:bg-${color} font-semibold"
    >${text}</a
>
		`;
  }
  return `
<button
    class="block w-full md:w-1/2 p-2 my-4 border-4 border-${color} font-sans text-center hover:bg-${color} font-semibold"
    >${text}</button
>
  `;
};
