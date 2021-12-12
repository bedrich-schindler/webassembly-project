import React, { useState } from 'react';
import {
  Alert,
  Button,
  FormLayout,
  Grid,
  Paper,
  Table,
  ScrollView,
  Toggle,
  FormLayoutCustomField,
} from '@react-ui-org/react-ui';
import onFileChanged from './helpers/onFileChanged';
import processFile from './helpers/processFile';
import styles from './styles.scss';

const IndexPageComponent = () => {
  const [isCaseSensitive, setCaseSensitive] = useState(false);
  const [isAlphaNumericalOnly, setAlphaNumericalOnly] = useState(false);
  const [fileContent, setFileContent] = useState(null);
  const [wordCounterData, setWordCounterData] = useState({
    characterOccurrences: [],
    isEmpty: false,
    isFailed: false,
    totalWords: 0,
    wordOccurrences: [],
  });

  return (
    <div className={styles.root}>
      <h1 className="typography-size-5">
        C++ ASCII Word Counter
      </h1>
      {wordCounterData.isFailed && (
        <div className="mb-5">
          <Alert color="danger">
            <strong>Error: </strong>
            We were unable to process file. Please be aware that files with only ASCII characters can be processed.
          </Alert>
        </div>
      )}
      {wordCounterData.isEmpty && (
        <div className="mb-5">
          <Alert color="info">
            <strong>Info: </strong>
            Processed file is empty or it is not plain text file.
          </Alert>
        </div>
      )}
      <p>
        Words:
        {wordCounterData.totalWords}
      </p>
      <Grid
        columns={{
          md: '2fr 1fr',
          xs: '1fr',
        }}
      >
        <Paper>
          <div className={styles.scrollableTable}>
            <ScrollView direction="vertical">
              <Table
                columns={[
                  {
                    label: 'Word',
                    name: 'id',
                  },
                  {
                    label: 'Occurrences',
                    name: 'value',
                  },
                ]}
                rows={wordCounterData.wordOccurrences}
              />
            </ScrollView>
          </div>
        </Paper>
        <Paper>
          <div className={styles.scrollableTable}>
            <ScrollView direction="vertical">
              <Table
                columns={[
                  {
                    label: 'Character',
                    name: 'id',
                  },
                  {
                    label: 'Occurrences',
                    name: 'value',
                  },
                ]}
                rows={wordCounterData.characterOccurrences}
              />
            </ScrollView>
          </div>
        </Paper>
      </Grid>
      <form className="mt-5">
        <FormLayout autoWidth>
          <Toggle
            checked={isAlphaNumericalOnly}
            label="Alphanumerical characters only"
            onChange={() => setAlphaNumericalOnly(!isAlphaNumericalOnly)}
          />
          <Toggle
            checked={isCaseSensitive}
            label="Case sensitive"
            onChange={() => setCaseSensitive(!isCaseSensitive)}
          />
          <FormLayoutCustomField>
            <input
              onChange={onFileChanged(setFileContent)}
              type="file"
            />
          </FormLayoutCustomField>
          <Button
            disabled={fileContent === null}
            label="Process"
            onClick={processFile(fileContent, isCaseSensitive, isAlphaNumericalOnly, setWordCounterData)}
          />
        </FormLayout>
      </form>
    </div>
  );
};

export default IndexPageComponent;
