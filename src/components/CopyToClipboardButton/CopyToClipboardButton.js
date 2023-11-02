import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyToClipboardButton = ({ toCopy, className }) => {
  return (
    <Button
      variant='outlined'
      className={className}
      type='button'
      onClick={async () => {
        await navigator.clipboard.writeText(toCopy);
      }}>
      <ContentCopyIcon fontSize='small'/>
    </Button>
  );
};

export default CopyToClipboardButton;
