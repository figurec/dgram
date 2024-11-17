# Expose the necessary ports
EXPOSE 3478 3478/udp 5349 5349/udp 49152-65535/udp

CMD ["node", "index.js"]
