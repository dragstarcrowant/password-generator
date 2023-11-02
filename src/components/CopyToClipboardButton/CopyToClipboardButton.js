import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyToClipboardButton = ({ toCopy, className }) => {
  return (
    <Button
      variant='outlined'
      className={className}
      type='button'
      size="small"
      sx={{p: '6px', width: 'auto', minWidth: '20px' }}
      onClick={async () => {
        await navigator.clipboard.writeText(toCopy);
      }}>
      <ContentCopyIcon fontSize='small'/>
    </Button>
  );
};

export default CopyToClipboardButton;
