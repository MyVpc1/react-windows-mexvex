const AlertImportCode =
`import { Alert } from "react-windows-ui";`;

const AlertUsageCode =
`<Alert
  isVisible={false}
  onBackdropPress={() => {}}
  title="Alert"
  message="This is alert Box.">
    <Alert.Footer>
      <Button
        type="primary"
        value="OK to Close"
        onClick={() => {}}
      />
    </Alert.Footer>
</Alert>`;

const AlertLightUsageCode =
`<Alert
  isVisible={true}
  onBackdropPress={() => {}}
  title={<><i className="icons10-sun"></i>Alert</>}
  message={<span>This is Light alert Box.</span>}>
    <Alert.Footer>
      <Button
        value="Cancel"
        onClick={() => {}}
      />
      <Button
        type="primary"
        value="Confirm"
        onClick={() => {}}
      />
    </Alert.Footer>
</Alert>`;

export {
    AlertImportCode,
    AlertUsageCode,
    AlertLightUsageCode
}