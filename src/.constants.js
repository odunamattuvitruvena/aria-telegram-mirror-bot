module.exports = Object.freeze({
  TOKEN: '1365979271:AAGTJULwcVHzXmuGuLqoDsWaF7_qxZYdO4c',
  ARIA_SECRET: 'aitorrentware-2020',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/aria-telegram-mirror-bot/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['jbkabks'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['hahfs'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1lp-sJdCt9qY4BLIgcS8Olz2wc-0--47c',
  SUDO_USERS: [960156861, 1326703864, 1004538768],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001278496201],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 1000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@AiGDriveBot"
  },
  IS_TEAM_DRIVE: false
});
