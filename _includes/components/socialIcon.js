module.exports = (content, icon, link) => {
  return `
<p>
<span class="iconify inline-block text-blue-400" data-icon="fa:${icon}"></span>
<a href="${link}" rel="noopener noreferer" target="_blank">
${content}
</a>
</p>
`;
};
