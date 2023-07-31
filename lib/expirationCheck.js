export default function hasExpired(expirationTimestamp) {
    // Get the current timestamp in milliseconds
    const currentTimestamp = new Date().getTime();
    // Convert the expiration timestamp to milliseconds
    const expirationTimestampMs = expirationTimestamp * 1000;
    // Calculate the timestamp 12 hours before the expiration
    const adjustedExpirationTimestampMs = expirationTimestampMs - 12 * 60 * 60 * 1000;
  
    // Compare the current timestamp with the adjusted expiration timestamp
    return currentTimestamp > adjustedExpirationTimestampMs;
  } 