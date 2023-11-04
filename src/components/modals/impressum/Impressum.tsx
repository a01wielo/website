import { Box, Text, Flex, ChakraProvider, Image, Button, Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Spacer, Icon } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
import TypeWriter from 'typewriter-effect'

const Impressum = () => {
    return (

        <ModalContent bg="white" color="black">
            <ModalHeader fontSize="2xl">
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Impressum.')
                            .start();
                    }}
                />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex p="5px" alignItems="center">
                    <Box w="100%">
                        <Text fontSize="l" textAlign="justify">
                            <h1>Arthur Wielomski</h1>
                            <h1>Bolivarallee 24, 14050 Berlin</h1>
                            <h1><a href='mailto:arthur.wie@gmail.com' style={{ 'color': 'blue' }}>arthur.wie@gmail.com</a></h1>
                            <br></br>
                            <h1><b>Haftung für Inhalte</b></h1>
                            <br></br>
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                            und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind
                            wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                            forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                            Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                            diese Inhalte umgehend entfernen.
                            <br></br>
                            <br></br>
                            <h1><b>Haftung für Links</b></h1>
                            <br></br>
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                            Links umgehend entfernen.
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                            Links umgehend entfernen.
                            <br></br>
                            <br></br>
                            <h1><b>Urheberrecht</b></h1>
                            <br></br>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                            Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
                            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                            derartige Inhalte umgehend entfernen.
                            <br></br>
                            <br></br>
                            <h1><b>Datenschutz</b></h1>
                            <br></br>
                            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
                            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-
                            Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten
                            werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-
                            Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                            Dritte ist nicht möglich.
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
                            Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
                            hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                            Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                            <br></br>
                            <br></br>
                            <h1><b>Google Analytics</b></h1>
                            <br></br>
                            Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google Analytics 4 eingesetzt, ein Webanalysedienst der Google LLC.
                            Verantwortliche Stelle für Nutzer in der EU/ dem EWR und der Schweiz ist Google Ireland Limited,
                            Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland („Google“).
                            Google Analytics verwendet Cookies, die eine Analyse der Benutzung unserer Webseiten durch Sie ermöglichen.
                            Die mittels der Cookies erhobenen Informationen über Ihre Benutzung dieser Website werden in der Regel an
                            einen Server von Google in den USA übertragen und dort gespeichert.
                        </Text>
                    </Box>

                </Flex>
            </ModalBody>
            <ModalFooter>
                {/* <Button colorScheme="blue" mr={3} onClick={handleClose}> */}
                {/* Close */}
                {/* </Button> */}
            </ModalFooter>
        </ModalContent>
    )
}

export default Impressum;